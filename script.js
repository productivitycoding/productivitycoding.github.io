/**
 * def calcStuff1(var1, var2, var3, var4, f1, f2, f3, f4, score1, score2, score3, score4):
    if var4 == 0 and score4 == 0:
        f1 = round(scaleFactor(f1, 0.85), 16)
        f2 = round(scaleFactor(f2, 0.85), 16)
        f3 = round(scaleFactor(f3, 0.85), 16)
        print(f1, f2, f3)
    score = str(f1*(score1/var1) + f2*(score2/var2) + f3*(score3/var3))
    print("Your score is " + score)
    TEST IS: 
calcStuff1(1, 40, 50, 0, 0.1, 0.35, 0.4, 0.15, 1, 40, 50, 0)

 */
function calcStuff1(max1, max2, max3, max4, weight1, weight2, weight3, weight4, score1, score2, score3, score4) {
  let val = getzero(max1, max2, max3, max4, score1, score2, score3, score4);
  if (val === 0) {
    //calculate normally
    return (weight1*(score1/max1) + weight2*(score2/max2) + weight3*(score3/max3) + weight4 * (score4/max4)).toString();
  }
  switch(val) {
    case 1:
      let remain = 1 - weight1;
      weight2 = roundto16digits(weight2 / remain);
      weight3 = roundto16digits(weight3 / remain);
      weight4 = roundto16digits(weight4 / remain);
      max1 = 1;
      return ((weight1*(score1/max1) + weight2*(score2/max2) + weight3*(score3/max3) + weight4 * (score4/max4)) * 100, 2).toString();
    case 2:
      let remain2 = 1 - weight2;
      weight1 = roundto16digits(weight1 / remain2);
      weight3 = roundto16digits(weight3 / remain2);
      weight4 = roundto16digits(weight4 / remain2);
      max2 = 1;
      return ((weight1*(score1/max1) + weight2*(score2/max2) + weight3*(score3/max3) + weight4 * (score4/max4)) * 100, 2).toString();
    case 3:
      let remain3 = 1 - weight3;
      weight1 = roundto16digits(weight1 / remain3);
      weight2 = roundto16digits(weight2 / remain3);
      weight4 = roundto16digits(weight4 / remain3);
      max3 = 1;
      return roundtondigits((weight1*(score1/max1) + weight2*(score2/max2) + weight3*(score3/max3) + weight4 * (score4/max4)) * 100, 2).toString();
    case 4:
      let remain4 = 1 - weight4;
      weight1 = roundto16digits(weight1 / remain4);
      weight2 = roundto16digits(weight2 / remain4);
      weight3 = roundto16digits(weight3 / remain4);
      max4 = 1;
      return roundtondigits((weight1*(score1/max1) + weight2*(score2/max2) + weight3*(score3/max3) + weight4 * (score4/max4)) * 100, 2).toString();
    return "ok who broke my functions?";
  }
}
function roundtondigits(number, digits) {
  return Math.round((number + Number.EPSILON) * Math.pow(10, digits)) / Math.pow(10, digits);
}
function roundto16digits(number) {
  return roundtondigits(number, 16);
}
function haszero(max1, max2, max3, max4, score1, score2, score3, score4) {
  return ((max4 == 0 && score4 == 0) || (max1 == 0 && score1 == 0) || (max2 == 0 && score2 == 0) || (max3 == 0 && score3 == 0));
}
function getzero(max1, max2, max3, max4, score1, score2, score3, score4) {
  if (!haszero(max1, max2, max3, max4, score1, score2, score3, score4)) {
    return 0;
  }
  if (max4 == 0 && score4 == 0) {
    return 4;
  } else if (max1 == 0 && score1 == 0) {
    return 1;
  } else if (max2 == 0 && score2 == 0) {
    return 2;
  } else if (max3 == 0 && score3 == 0) {
    return 3;
  }
}