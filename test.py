def calcStuff1(var1, var2, var3, var4, f1, f2, f3, f4, score1, score2, score3, score4):
    if var4 == 0 and score4 == 0:
        f1 = round((f1/ 0.85), 16)
        f2 = round((f2/ 0.85), 16)
        f3 = round((f3/ 0.85), 16)
        print(f1, f2, f3)
    score = str(f1*(score1/var1) + f2*(score2/var2) + f3*(score3/var3))
    print("Your score is " + score)
calcStuff1(1, 40, 50, 0, 0.1, 0.35, 0.4, 0.15, 1, 40, 50, 0)
