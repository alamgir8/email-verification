This is simple setup for MERN project email verification/forget-password with nodemailer and gmail default server.


for setup configuration gmail, you need couple of thing to do: 

1. You need an email and password for using email verification and forget the password option. 
Use an email that you want to send messages to others when they register or request to forget the password.
I use Nodemailer and the default email server for this. 
watch this video https://www.youtube.com/watch?v=J4CtP1MBtOE&list=LL&index=3&ab_channel=TonyTeachesTech to create an app password for email app-password.
After that put your email in .env file EMAIL_USER and app password in the EMAIL_PASS variable.
Also, need to Allow less secure apps to be ON, and access captcha see this doc- https://stackoverflow.com/questions/51980436/nodemailer-throws-error-invalid-login-534-5-7-14

