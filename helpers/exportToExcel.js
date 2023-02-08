const xlsx = require('xlsx');

const exportToExcel = (data, workSheetColumnNames, workSheetName) => {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [
        workSheetColumnNames,
        ... data
    ];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    const sheet = xlsx.write(workBook, { type: 'base64', bookType: 'xlsx' });
    return sheet
}

module.exports = exportToExcel;