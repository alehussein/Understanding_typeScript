let logged;

function senAnalytics(data: string) {
  console.log(data);
  logged = true;
}

senAnalytics("The Data");
