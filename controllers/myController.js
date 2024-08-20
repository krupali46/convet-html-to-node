const indexcon = (req, res) => {
    res.render('index');
}

const aboutcon = (req, res) => {
    res.render('about');
}

const portfoliocon = (req, res) => {
    res.render('portfolio');
}

const contactcon = (req, res) => {
    res.render('contact');
}



module.exports = { indexcon , aboutcon , portfoliocon , contactcon }    
