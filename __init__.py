from flask import Flask
from flask import render_template
#from flask import request

app = Flask(__name__)

#@app.route('/')
#def homepage():
#    return render_template("main.html")

@app.route('/')
def modal():
	return render_template("main_modal.html")

#@app.route('/multiply')
#@app.route('/multiply/<int:num1>/<int:num2>')
#def multiply(num1=5, num2=5):
#  return str(num1*num2)

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=8010)
