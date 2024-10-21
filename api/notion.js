// api/notion.js
export default async function handler(req, res) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const apiToken = process.env.NOTION_API_TOKEN;

  try {
      const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${apiToken}`,
              'Content-Type': 'application/json',
              'Notion-Version': '2022-06-28'
          }
      });

      const data = await response.json();
      res.status(200).json(data);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
  }
}
