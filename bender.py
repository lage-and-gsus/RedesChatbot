#----------------------------------------------------------------------
#  eliza.py
#
#  a cheezy little Eliza knock-off by Joe Strout
#  with some updates by Jeff Epler
#  hacked into a module and updated by Jez Higgins
#----------------------------------------------------------------------

import string
import random
import sqlite3

conn = sqlite3.connect('db.sqlite3')

c = conn.cursor()
#c.execute(""" SELECT * FROM bot_question """)
#print(c.fetchone())
#conn.commit()
#conn.close()

class bender:
    def translation():
        return 4

def respond(str):
    print(str)
    query = ("SELECT choice_text FROM bot_choice, bot_question WHERE bot_question.question_text LIKE '%" + str + "'")
    c.execute(query)
    result = c.fetchall()
    print(len(result))
    resp =  random.choice(result) if len(result) > 0 else 'Disculpa, no entiendo
    return resp

print(respond('Que venden?'))
