import Papa from "papaparse";
import fs from "fs";

export const CsvHelper =  {
    writeCsvFile: (filePath: string, data: any) => {
        return new Promise((resolve, reject) => {
            const csv = Papa.unparse(data);
            fs.writeFile(filePath, csv, {encoding: "utf8"}, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(`New CSV file created at ${filePath}`);
            });
        });
    },
    readCsvFile: <T>(filePath: string): Promise<T> => {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, "utf8", (err: any, data) => {
                if (err) return reject(err);
                resolve(data as T);
            });
        });
    },
    parseCsv: <T>(csv: any): T => {
        return Papa.parse(csv, { header: true }).data as T;
    }   
}