exports.run = (client, message, [args, ...activity]) => {
    try {
    let actType = args[0].toLowerCase()

    client.user.setActivity(activity.join(' '), { type: `${actType}`})

    message.reply(`Set activity to: **${activity}**`)
    } catch (err) {
        console.log(err)
    }
}
