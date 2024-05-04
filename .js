<script>
  let count = 200;

  function updateTicker() {
    const dayOfWeek = new Date().getDay();

    switch (dayOfWeek) {
      case 0: // Sunday
        count += 1;
        break;
      case 1: // Monday
        count += 2;
        break;
      case 2: // Tuesday
        count += 1;
        break;
      case 3: // Wednesday
        count += 4;
        break;
      case 4: // Thursday
        count += 3;
        break;
      case 5: // Friday
        count += 0;
        break;
      case 6: // Saturday
        count += 4;
        break;
    }

    document.getElementById("ticker").innerText = count;
  }

  // Call updateTicker() initially
  updateTicker();

  // Set an interval to call updateTicker() every day at midnight
  setInterval(updateTicker, 24 * 60 * 60 * 1000);
</script>
