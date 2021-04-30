var Airtable = require('airtable')
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
)

module.exports = async (req, res) => {
	const { body } = req

	base('Table 1').create(
		[
			{
				fields: {
					Email: body.email,
				},
			},
		],
		function (err, records) {
			if (err) {
				console.error(err)
				return res.json({ error: true, message: 'An error occurred.' })
			}
			records.forEach(function (record) {
				console.log(record.getId())
				return res.json({
					error: false,
					message: `Thank you for signing up! (${body.email})`,
				})
			})
		}
	)
}
