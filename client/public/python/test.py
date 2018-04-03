
f=open("users.txt", "r")
d={}
for line in f:
    x=line.split(",")
    a=x[0]
    b=x[1]
    d[a]=b
print(d)
