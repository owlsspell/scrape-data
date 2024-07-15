import axios from "axios";
import * as cheerio from 'cheerio';
import Scraper from "@/components/Scraper";

const getData = async (id) => {
  "use server"
  const { data } = await axios.get(
    "https://emma.maryland.gov/page.aspx/en/rfp/request_browse_public"
  );
  const $ = cheerio.load(data);

  let tableData = null;
  $("table tbody tr").map((i, tr) => {
    const getElement = (id) => $(tr).find("td").eq(id).text().trim();
    const rowId = getElement(1);
    if (rowId === id) {
      tableData = {
        id: rowId,
        title: getElement(2),
        status: getElement(3),
        dueOrCloseDate: getElement(4),
        publishDate: getElement(5),
        category: getElement(6),
        solicitationType: getElement(7),
        issuingAgency: getElement(8),
        bidHoldersList: getElement(9),
        emmId: getElement(10),
      };
    }
  })
  if (!tableData || tableData.id === "") return null
  return tableData;
}

export default async function Home() {

  return (
    <main>
      <Scraper getData={getData} />
    </main>
  );
}
