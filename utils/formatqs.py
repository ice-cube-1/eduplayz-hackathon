from random import randint

ff=open('qs.txt').readlines()
ff=[ff[i][:-1] for i in range(len(ff))]
soluble=ff[:16]
insoluble=ff[16:]
soluble=[[soluble[i],'T'] for i in range(len(soluble))]
insoluble=[[insoluble[i],'F'] for i in range(len(insoluble))]
for i in insoluble:
    soluble.append(i)
toOut=[]
while(len(soluble))>1:
    r=randint(0,len(soluble)-1)
    toOut.append(soluble[r])
    soluble.pop(r)
open("formatted.txt","w").write(str(toOut))