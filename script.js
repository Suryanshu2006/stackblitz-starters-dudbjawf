document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  if (count) {
    count = parseInt(count, 10) + 1;
  } else {
    count = 1;
  }

  // 2. Update the cookie with the new count value
  setCookie('count', count, 7); // Cookie expires in 7 days

  // 3. Display the count on the webpage
  document.getElementById('countDisplay').textContent = count;
  
  // 4. Optional: Add a button to increment count manually
  // Create button
  const btn = document.createElement('button');
  btn.textContent = 'Increment Count';
  btn.onclick = function() {
    let currentCount = getCookie('count');
    currentCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;
    setCookie('count', currentCount, 7);
    document.getElementById('countDisplay').textContent = currentCount;
  };
  document.body.appendChild(btn);
});
