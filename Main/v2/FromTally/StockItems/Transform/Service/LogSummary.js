const LogSummary = ({ rowsInserted, filePath }) => {
    console.log(`
[StockItems]
Rows Inserted : ${rowsInserted}
File          : ${filePath}
    `);
};

export default LogSummary;
