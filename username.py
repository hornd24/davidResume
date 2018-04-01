
stored_users = {'jason': 'oeros', 'nicole': 'chance'}
# goes through the funtions in order
def main():
    
    check_sign_in()
    
    login()or add_user()
  
    RockPaperPython()

#asks if you have an account already
def check_sign_in():
    
    print('Do you want to sign in or create a new user?')

    user_choice = input( 'Create User or Sign In')
    if user_choice == 'Create User':
        add_user()
    if user_choice == 'Sign In':
        login()


# Adds a username and password to the database   
def add_user():
    print('Creating user, \n please create username and password')
    username = input('Username: ')
    password = input('Password: ')
    if stored_users.get(username):
        print('Username already exiss')
        add_user()
    else:
        stored_users[username] = password
        
        login()
#trails = a counter to see how many tries the user has used to find his info        
trials=0 
# Lets a user sign in, but he has only three attempts
def login():
    global stored_users
    global trials
    print('Please sign in')
    
    while trials < 3: 
        print('Logging in')
        username = input('Username: ')
        password = input('Password: ')
        if stored_users.get(username) == password:
           print ('Welcome to Rock Paper Python')
           RockPaperPython()
           return True

        else:
            trials += 1
            print ('Wrong username or password')
        if trials >=2 and trials <3 :
            print('if username and password if entered wrong one more time, program will exit')
        if trials >=3:
            exit()
            
#point system for rock paper python
#computer_points=0
#user_points=0

#Rock Paper Python the game 
def RockPaperPython():
    print('\nReady to Play Rock Paper Python')
    rounds = int(input('How many rounds?'))
    computer_points=0
    user_points=0
    for x in range(0, rounds):
        user_choice = input("\nEnter rock, paper, or python:\n")
    #global computer_points
    #global user_points
        import random
        my_list = ['rock','paper','python']
        computer_choice = random.choice(my_list)
        print(computer_choice)
        if user_choice == computer_choice:
            print('User points =',user_points)
            print('Computer Points=',computer_points)
            print('TIE')
        elif user_choice == 'rock' and computer_choice == 'python':
            user_points +=1
            print('User points =', user_points)
            print('Computer Points=',computer_points)
            print('WIN')
        elif user_choice == 'paper' and computer_choice == 'rock':
            user_points +=1
            print('User points =',user_points)
            print('Computer Points=',computer_points)
            print('WIN')
        elif user_choice == 'python' and computer_choice == 'paper':
            user_points +=1
            print('User points =',user_points)
            print('Computer Points=',computer_points)
            print('WIN')
        else:
            print('You lose :( Computer wins :D')
            computer_points += 1
            print('User points =',user_points)
            print('Computer Points=',computer_points)
        x += 1
    
    
    Play_Again= input('Play Again? Yes or NO')
    if Play_Again == 'Yes':
        RockPaperPython()

    else:
        print('Thanks for Playing')
        main()

main()

    

