(function displayquote() {

    var date = new Date(),
        today = date.getDay(),

        weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

        dateContent = document.getElementById('datebox'),
        quoteContent = document.getElementById('quotebox');

    dateContent.innerHTML = '<h1>' + weekdays[today] + '</h1>';

    switch (today) {

        case 0: 
            quoteContent.innerHTML = '<p><q>The secret of life, though, is to fall seven times and to get up eight times.</q></p>';
        break;

        case 1: 
            quoteContent.innerHTML = '<p><q>When you want something, all the universe conspires in helping you to achieve it.</q></p>';
        break;

        case 2: 
            quoteContent.innerHTML = '<p><q>You are more than you appear to be, all the worlds strengh and power rests inside you.</q></p>';
        break;

        case 3: 
            quoteContent.innerHTML = '<p><q>There is only one thing that makes a dream impossible to achieve: the fear of failure.</q></p>';
        break;

        case 4: 
            quoteContent.innerHTML = '<p><q>Worry drains the mind of its power and, sooner or later, it injures the soul.</q></p>';
        break;

        case 5: 
            quoteContent.innerHTML = '<p><q>Failure is not having the courage to try, nothing more and nothing less.</q></p>';
        break;

        case 6: 
            quoteContent.innerHTML = '<p><q>It does not matter how slowly you go as long as you do not stop.</q></p>';
        break;

        default:
            quoteContent.innerHTML = '<p><q>Know yourself, for if you knowyourself you will know everything</q></p>';
        break;
        }
}());

(function displaycolours() {
    
    var colourlist = [
        { colour: '#EC644B' }, 
        { colour: '#1E8BC3' }, 
        { colour: '#049372' }, 
        { colour: '#D35400' },
        { colour: '#E67E22' },
        { colour: '#C0392B' },
        { colour: '#913D88' },
        { colour: '#22A7F0' },
        { colour: '#90C695' },
        { colour: '#F2784B' }
    ],
    
        body = document.querySelector('body'),
        randomNumber = Math.floor(Math.random() * colourlist.length); 
    
    body.style.backgroundColor = colourlist[randomNumber].colour;
    
}());

