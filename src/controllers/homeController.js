

const getHomePage = (req, res) =>{
    res.send('Hello World with Kimoon!');

}

const getKimoon = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {getHomePage, getKimoon};