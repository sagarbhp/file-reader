//---------------------------------------- Given

if (province == "ONTARIO") {
  rate = ONTARIO_RATE;
  amt = base * ONTARIO_RATE;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
} else if (province == "QUEBEC" || province == "ALBERTA") {
  rate = province == "QUEBEC" ? QUEBEC_RATE : ALBERTA_RATE;
  amt = base * rate;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
  if (province == "QUEBEC") {
    points = 2;
  }
} else {
  rate = 1;
  amt = base;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
}

//-------------------------------------------Refactored

switch (province) {
  case "ONTARIO":
    amt = base * ONTARIO_RATE;
    break;

  case "QUEBEC":
    amt = base * QUEBEC_RATE;
    points = 2;
    break;

  case "ALBERTA":
    amt = base * ALBERTA_RATE;
    break;

  default:
    amt = base;
    break;
}

calc = 2 * basis(amt) + extra(amt) * 1.05;
