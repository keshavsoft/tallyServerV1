import fs from "fs";
import path from "path";

const dataPath = "./Data/Main/StockItems.json";

const SaveToFile = (rows) => {
    const filePath = path.resolve(dataPath);

    fs.writeFileSync(filePath, JSON.stringify(rows));

    return filePath;
};

export default SaveToFile;
