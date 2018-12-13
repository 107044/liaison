module.exports = {
    user          : process.env.NODE_ORACLEDB_USER || "inp",
  
    // Instead of hard coding the password, consider prompting for it,
    // passing it in an environment variable via process.env, or using
    // External Authentication.
    password      : process.env.NODE_ORACLEDB_PASSWORD || "itg1020209",
  
    // For information on connection strings see:
    // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "(DESCRIPTION=(load_balance=on)(failover=on)(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=wf4-oradb01-vip)(PORT=1521))(ADDRESS=(PROTOCOL=TCP)(HOST=wf4-oradb02-vip)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=wfh)(failover_mode=(type=select)(method=basic))))",
  
    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://oracle.github.io/node-oracledb/doc/api.html#extauth
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
  };