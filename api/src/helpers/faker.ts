import { faker } from "@faker-js/faker";
import { CsvFeilds, FakerUserAddress } from "../types";

export const FakeData = {
    generateFakeAddresses: (size: number): FakerUserAddress[] => {
        const data: FakerUserAddress[] = [];
    
        for (let i = 1; i < size; i++) {
            const { zipCode, streetAddress } = faker.location;
            let address = streetAddress(true).replace(/^\d+\s*/, "");
    
            data.push({
                userId: i,
                address,
                zipCode: zipCode({
                    format: "##### - ###",
                }),
            });
        }
    
        return data;
    },
    generateFakeUsers: (data: CsvFeilds[]): CsvFeilds[] => {
        const fakeUsers = data.map((user: any) => {
            return {
                ...user,
                ID: user.ID,
                Nome: faker.person.fullName(),
                "Telemovel": faker.phone.number({
                    style: "international",
                }),
                "Referencia": faker.person.fullName(),
            };
        });

        return fakeUsers as CsvFeilds[];
    }
}