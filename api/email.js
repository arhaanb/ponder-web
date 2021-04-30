var Airtable = require('airtable')
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
)
const tableName = 'Emails'

function validate(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

module.exports = async (req, res) => {
	const email = req.body.email.toLowerCase()
	if (validate(email)) {
		base(tableName)
			.select({
				maxRecords: 1,
				filterByFormula: `LOWER(Email) = "${email}"`,
			})
			.eachPage(function page(records) {
				if (records.length > 0) {
					return res.send({
						error: true,
						message: `Your email is already registered! (${email})`,
					})
				} else {
					base(tableName).create(
						[
							{
								fields: {
									Email: email,
								},
							},
						],
						function (err, records) {
							if (err) {
								console.error(err)
							}
							records.forEach(function (record) {
								console.log(record.getId())
								return res.json({
									error: false,
									message: `Thank you for signing up! (${email})`,
								})
							})
						}
					)
				}
			})
	} else {
		return res.json({ error: true, message: 'Invalid email.' })
	}
}
