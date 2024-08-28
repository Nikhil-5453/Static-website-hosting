This website is Static which is begnnier project using AWS S3 and CloudFront 

-> Create HTML, CSS, JavaScript files to host a website.
-> To Host website on S3 and CloudFront
    Step 1: Create an S3 Bucket
            a.) Go to the S3 console.
            b.) Create a new bucket with a unique name.
            c.) Enable static website hosting for the bucket:
                  Go to Properties > Static Website Hosting.
                  Set the index document to 'index.html'.
            d.) Upload the index.html, styles.css, and script.js files to the bucket.
    Step 2: Make the S3 Bucket Public
            a.) Go to Permissions > Bucket Policy.
            b.) change bucket policy to make the bucket publicly accessible (Buket policy given in 
            c.) Make sure to replace 'YOUR_BUCKET_NAME' with your actual bucket name.
    Step 3: Set Up CloudFront
            a.) Go to the CloudFront console and click Create Distribution.
            b.) Under Origin Settings, choose your **S3 bucket** as the origin.
            c.) Set the Default Root Object to 'index.html'.
            d.) Create the distribution, and once it's deployed, use the CloudFront domian URL to access your 
                website.
  -> Now, your static website is hosted via S3 and accelerated via CloudFront!
