import mysql from 'mysql2/promise';

let mysqlconn = null;

export function mysqlconnFn() {

    if (!mysqlconn) {
        mysqlconn = mysql.createConnection({ 
            host: 'mysql-1.de-fra.game.heavynode.net:3306',
            user: 'u13238_AXhu5poAwm',
            password: 'mLK0gaD6NwhMYn@9f7=8njDm',
            database: 's13238_jajapl'
        });
    }

    return mysqlconn;
}