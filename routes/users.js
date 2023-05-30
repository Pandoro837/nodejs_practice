var express = require('express');
var router = express.Router();
var db_connect = require('../dbms/db_connect');

router.get('/signin', (req, res) => {
    res.render('./users/signin');
});

router.get('/signup', (req, res) => {
    res.render('./users/signup');
});

router.post('/checkEmail', (req, res) => {
    const userEmail = res.body;
    console.log(userEmail);
    const sql = `select user_email from users where user_email = '${userEmail}'`
    //console.log(sql);
    /*
    var conn = db_connect.init();
    db_connect.open(conn);
    conn.query(sql, (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            if(res.length){
                console.log('Exist : ', rows);
                return false;
            } else {
                return true;
            }
        };
    });
    db_connect.close(conn);
    */
});

router.post('/add', (req, res) => {
    const signupData = req.body;
    console.log(signupData);
    const sql = `insert into users(user_email, user_password, user_nickname) values('${signupData.userEmail}', PASSWORD('${signupData.userPassword}'), '${signupData.userNickName}')`;

    var conn = db_connect.init();
    db_connect.open(conn);
    conn.query(sql, (error, rows, fields) => {
        if (error) {
            console.log(error);
        };
        console.log('result : ', rows);
    });
    db_connect.close(conn);
    res.redirect('/');
});

module.exports = router;