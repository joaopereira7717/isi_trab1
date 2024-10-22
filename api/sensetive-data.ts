import { CsvHelper, FakeData } from './src/helpers';
import { CsvFeilds } from './src/types';

export const processCsv = async () => {
    const {readCsvFile, writeCsvFile, parseCsv } = CsvHelper;
    
    try {
        const csvData = await readCsvFile("../inputs/unsafe_users.csv");
        const parsedData = await parseCsv<CsvFeilds[]>(csvData);
        const fakeUsers = await FakeData.generateFakeUsers(parsedData);
        const newCsv = await writeCsvFile("../inputs/fake_data.csv", fakeUsers);

        console.log("csv written >", newCsv)
    } catch(e: any) {
        console.error("error >",e);
    }
}
