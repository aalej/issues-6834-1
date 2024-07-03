const functions = require("firebase-functions/v1")
const admin = require('firebase-admin');

// Need to supply fake creds, see https://github.com/firebase/firebase-tools/issues/3400
admin.initializeApp({
    credential: admin.credential.cert({
        "project_id": "demo-project",
        "client_email": "service-account@demo-project.iam.gserviceaccount.com",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+v6xaBHbOt8rY\n3ilk8bU1PBrUrpbFmWWr8aH4tJXCjW9Ot8M5a0KDQAAirbOa24d+/3b6HPviCtOu\nUM+djwZURS/tn6kEW9uvNzVYSB/bs+uaK06AteTngD+2+z87F+GgyZrH96ZR+VIt\nUZa86qsQv3VcqftkSv5BUn4paE+ZYekvV1itNVn60z07JYxnnsj1c1UHaS8ajq5V\nq4dvnn7+deMUH/meclyIQchk1JTydNYwik3OVpRfRP3UEqwoGiyX0GVGJuJleRrY\niN7llO0Vnd0cv/jJa548ZXT7gYsYMM6R6DDUI6Og4Xlk9e9eamuLsKRSBrKNdp2X\ntV7HCW2bAgMBAAECggEAIfXWJaCt1lf6kWncTNCLxpKQ5FTBGyUYaOh4QeNE1oJ/\n0q/83fguu1dlrsbmNyfmk8G/2P/YCIKM9XgFvrN8GPzIb7IBUXlZP3TA1prgsSjz\nRVt4eonn2x+GOHm65DZ4QTwjhn6c6fNNoivofnH5St4LcxgAXfbMFa0uMQkVQuVQ\n7S/NgupWp79AO/5tvGzUidFI1HW2o+oz9v9HAEPyRHBRQ5cZzlc+wJZtBAVEUYxh\nrhYlw2LADuS/JBxxX2jiqahFTOjnt4AFYHw4BHPjJL4ajEdE1MwQpjqAb2LvGMgh\nSLfv6iZmlJq35olZt7YmElhO06NjbFFFwU3B7LctYQKBgQDnjlxpYL/nbIncmZzp\n5I9yE2uVgFckehpH+/ruKYtyDI1Go2qAn6KNFiuOaQOlq7eSvCvZCa+QFLGFXUze\n6lNoeXfsRw8+KTMccBDAJrYm/drVhWhrjuchJiC9LMTs7t/glVJPuc//veO0r/B7\nKnhDM4HAcRTpCya3Wq4hMJvABQKBgQDS4oWgV26nx/3nL4+eJibtEoW3Jup7GeXg\nwEyuspIS0Qd3O0ESBQUOuaydRqBlKnb7yYBV1690PSGC+fwuZXuYy9+Pb/4tT1LJ\npwIR6u2zvKNdBL2YBZPnI+Pb1gjqbqojPT0jfg+FdI8XFmi03BmF+ZynaYpWSOag\nwznlVUkJHwKBgAGSgOQiSQtMPF9oF52q9KJkqV1Zgr33qkgE2P5W/+BlX2w0XdvD\nubnVhbQw2Fp+oP95EZ8mpq+GxHHQYV4+HxTdhkfvb5YPd45g4Gw9lw0Kujqq7juU\nu9MIzD4cmLW3JYQD34w1CcmFw48Nhsd/UVO7fM0Ot4KhlcC29+m3x8b1AoGASOVg\nh4Jxj7HEBKweGu7ZOc3TRvI+z3quSbhvSVwUvkhfKknjPlVZ4DMyhdMqEo5RPsvy\nfrnlvmp7MQk0sN0HklO23aA63nKzDV2bi5IHxL+KQNcoqmoTLCzt0Mn1nwPN8Ax1\nG9Wxi9I0vChU3V/Pus4D5qLG3PiqMBwL4UhPzMUCgYB/lRyXnEixfZJOF1FgVAVg\ntL/ejQAJ1UopUwi/wr+bXj+HN7bbn6NR/mckHaeD5+ZgOXUxioGvyJwE3sCAO4dm\nEkKP0yQ6+HPlxn6jFEoT2CN+EprZppsYGzWUTc45x49jWpebCBB2JVUklL6ubxUy\nmWjfYuhC3BlrBMvt+Xwa9g==\n-----END PRIVATE KEY-----\n",
    })
})

exports.firstGenGenerateThumbnail = functions.storage.object().onFinalize(async (object) => {
    const fileBucket = object.bucket
    const path = object.name

    const signedUrl = await admin.storage().bucket(fileBucket).file(path).getSignedUrl({ action: 'read', expires: Date.now() + 15 * 60 * 1000 })
    functions.logger.debug(signedUrl)
}); 