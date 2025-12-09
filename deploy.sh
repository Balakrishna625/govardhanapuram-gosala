#!/bin/bash

# Govindapuram Goshala - AWS S3 Deployment Script
# This script builds and deploys your website to AWS S3 + CloudFront

set -e  # Exit on error

echo "🌿 Govindapuram Goshala - Deployment Script"
echo "=========================================="
echo ""

# Configuration (UPDATE THESE!)
BUCKET_NAME="govindapuramgoshala.com"
CLOUDFRONT_ID="YOUR_CLOUDFRONT_DISTRIBUTION_ID"  # Get this from AWS Console
AWS_PROFILE="default"  # Change if using a different AWS profile

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first:"
    echo "   brew install awscli"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version 20+ required. Current: $(node --version)"
    echo "   Please upgrade: nvm install 20 && nvm use 20"
    exit 1
fi

echo "✅ Prerequisites check passed"
echo ""

# Build the website
echo "🔨 Building website..."
npm run build

if [ ! -d "out" ]; then
    echo "❌ Build failed - 'out' directory not found"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Deploy to S3
echo "☁️  Deploying to S3 bucket: $BUCKET_NAME"
aws s3 sync out/ s3://$BUCKET_NAME \
    --delete \
    --profile $AWS_PROFILE \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "*.html" \
    --exclude "*.xml" \
    --exclude "*.json"

# Deploy HTML files with shorter cache
aws s3 sync out/ s3://$BUCKET_NAME \
    --profile $AWS_PROFILE \
    --cache-control "public, max-age=0, must-revalidate" \
    --exclude "*" \
    --include "*.html" \
    --include "*.xml" \
    --include "*.json"

echo "✅ Files uploaded to S3"
echo ""

# Invalidate CloudFront cache (optional but recommended)
if [ "$CLOUDFRONT_ID" != "YOUR_CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_ID \
        --paths "/*" \
        --profile $AWS_PROFILE > /dev/null
    echo "✅ CloudFront cache invalidated"
else
    echo "⚠️  CloudFront ID not set - skipping cache invalidation"
    echo "   Update CLOUDFRONT_ID in this script when you have it"
fi

echo ""
echo "🎉 Deployment Complete!"
echo ""
echo "Your website is live at:"
echo "   https://$BUCKET_NAME"
echo ""
echo "Next steps:"
echo "  1. Test the website thoroughly"
echo "  2. Check all images load correctly"
echo "  3. Verify WhatsApp integration works"
echo "  4. Test contact form"
echo ""
