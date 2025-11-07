const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const BOT_TOKEN = process.env.TOKEN;
// Initialize bot
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

const mcaITimetable = {
  class: "MCA-I",
  schedule: {
    Monday: [
      {
        time: "09:30AM-10:30AM",
        subject: "DM",
        faculty: "PG",
        type: "lecture",
      },
      {
        time: "10:30AM-11:30AM",
        subject: "Lab on TC",
        faculty: "NP",
        type: "lab",
        duration: 2,
      },
      {
        time: "11:30AM-12:30PM",
        subject: "Lab on TC",
        faculty: "NP",
        type: "lab",
        continued: true,
      },
      {
        time: "12:30PM-01:30PM",
        subject: "COA",
        faculty: "PRD",
        type: "lecture",
      },
      { time: "01:30PM-02:00PM", subject: "Break", type: "break" },
      {
        time: "02:00PM-03:00PM",
        subject: "DBMS",
        faculty: "PCG",
        type: "lecture",
      },
      {
        time: "03:00PM-04:00PM",
        subject: "DS",
        faculty: "OPR",
        type: "lecture",
      },
      {
        time: "04:00PM-05:00PM",
        subject: "Seminar",
        faculty: "PRD",
        type: "seminar",
      },
    ],
    Tuesday: [
      {
        time: "09:30AM-10:30AM",
        subject: "DM",
        faculty: "PG",
        type: "lecture",
      },
      {
        time: "10:30AM-11:30AM",
        subject: "Lab on DS",
        faculty: "Rekha",
        type: "lab",
        duration: 2,
      },
      {
        time: "11:30AM-12:30PM",
        subject: "Lab on DS",
        faculty: "Rekha",
        type: "lab",
        continued: true,
      },
      {
        time: "12:30PM-01:30PM",
        subject: "COA",
        faculty: "PRD",
        type: "lecture",
      },
      { time: "01:30PM-02:00PM", subject: "Break", type: "break" },
      {
        time: "02:00PM-03:00PM",
        subject: "DBMS",
        faculty: "PCG",
        type: "lecture",
      },
      {
        time: "03:00PM-04:00PM",
        subject: "DS",
        faculty: "OPR",
        type: "lecture",
      },
      {
        time: "04:00PM-05:00PM",
        subject: "Seminar",
        faculty: "PRD",
        type: "seminar",
      },
    ],
    Wednesday: [
      {
        time: "09:30AM-10:30AM",
        subject: "DM",
        faculty: "PG",
        type: "lecture",
      },
      {
        time: "10:30AM-11:30AM",
        subject: "Lab on DS",
        faculty: "Rekha",
        type: "lab",
        duration: 2,
      },
      {
        time: "11:30AM-12:30PM",
        subject: "Lab on DS",
        faculty: "Rekha",
        type: "lab",
        continued: true,
      },
      {
        time: "12:30PM-01:30PM",
        subject: "COA",
        faculty: "PRD",
        type: "lecture",
      },
      { time: "01:30PM-02:00PM", subject: "Break", type: "break" },
      {
        time: "02:00PM-03:00PM",
        subject: "DBMS",
        faculty: "PCG",
        type: "lecture",
      },
      {
        time: "03:00PM-04:00PM",
        subject: "Seminar",
        faculty: "PRD",
        type: "seminar",
      },
      { time: "04:00PM-05:00PM", subject: "Free", type: "free" },
    ],
    Thursday: [
      {
        time: "09:30AM-10:30AM",
        subject: "DM",
        faculty: "PG",
        type: "lecture",
      },
      {
        time: "10:30AM-11:30AM",
        subject: "DBMS Lab",
        faculty: "Poonam",
        type: "lab",
        duration: 2,
      },
      {
        time: "11:30AM-12:30PM",
        subject: "DBMS Lab",
        faculty: "Poonam",
        type: "lab",
        continued: true,
      },
      {
        time: "12:30PM-01:30PM",
        subject: "COA",
        faculty: "PRD",
        type: "lecture",
      },
      { time: "01:30PM-02:00PM", subject: "Break", type: "break" },
      {
        time: "02:00PM-03:00PM",
        subject: "DBMS",
        faculty: "PCG",
        type: "lecture",
      },
      {
        time: "03:00PM-04:00PM",
        subject: "Seminar",
        faculty: "PRD",
        type: "seminar",
      },
      { time: "04:00PM-05:00PM", subject: "Free", type: "free" },
    ],
    Friday: [
      { time: "09:30AM-10:30AM", subject: "Free", type: "free" },
      {
        time: "10:30AM-11:30AM",
        subject: "DBMS Lab",
        faculty: "Poonam",
        type: "lab",
        duration: 2,
      },
      {
        time: "11:30AM-12:30PM",
        subject: "DBMS Lab",
        faculty: "Poonam",
        type: "lab",
        continued: true,
      },
      {
        time: "12:30PM-01:30PM",
        subject: "TC",
        faculty: "NP",
        type: "lecture",
      },
      { time: "01:30PM-02:00PM", subject: "Break", type: "break" },
      {
        time: "02:00PM-03:00PM",
        subject: "DS",
        faculty: "OPR",
        type: "lecture",
      },
      {
        time: "03:00PM-04:00PM",
        subject: "BG_Course",
        faculty: "PCG",
        type: "lecture",
      },
      { time: "04:00PM-05:00PM", subject: "Free", type: "free" },
    ],
    Saturday: [
      { time: "09:30AM-10:30AM", subject: "Free", type: "free" },
      {
        time: "10:30AM-11:30AM",
        subject: "Lab on DS",
        faculty: "Rekha",
        type: "lab",
        duration: 2,
      },
      {
        time: "11:30AM-12:30PM",
        subject: "Lab on DS",
        faculty: "Rekha",
        type: "lab",
        continued: true,
      },
      {
        time: "12:30PM-01:30PM",
        subject: "TC",
        faculty: "NP",
        type: "lecture",
      },
      { time: "01:30PM-02:00PM", subject: "Break", type: "break" },
      {
        time: "02:00PM-03:00PM",
        subject: "DS",
        faculty: "OPR",
        type: "lecture",
      },
      {
        time: "03:00PM-04:00PM",
        subject: "BG_Course",
        faculty: "PCG",
        type: "lecture",
      },
      { time: "04:00PM-05:00PM", subject: "Free", type: "free" },
    ],
  },
  subjects: {
    DM: "Discrete Mathematics",
    TC: "Theory of Computation",
    COA: "Computer Organization & Architecture",
    DBMS: "Database Management System",
    DS: "Data Structures",
    BG_Course: "Bridge Course",
  },
};

// Convert "09:30AM" to 24h { hour: 9, minute: 30 }
function parseTime(t) {
  const [_, hourStr, minuteStr, period] = t.match(/(\d{1,2}):(\d{2})(AM|PM)/i);
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);
  if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
  return { hour, minute };
}




const INLINE_KEYBOARD_LIST = {
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Today’s Schedule", callback_data: "today_schedule" },
        { text: "Next Class", callback_data: "next_class" },
      ],
      [{ text: "Upcoming Classes", callback_data: "upcoming_classes" }],
    ],
  },
};

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `👋 Hello ${msg.from.first_name}!\n\n This Bot is Tell Your Class Schedules.\n No headache of See schedule in PDFs again and again`,
    INLINE_KEYBOARD_LIST
  );
});

function nextClassesHandler() {
  const now = new Date();
  const days = Object.keys(mcaITimetable.schedule);
  const today = days[now.getDay() - 1]; // getDay() -> Sunday=0
  const todayClasses = mcaITimetable.schedule[today] || [];
  let msg = "";

  const currentTime = now.getHours() * 60 + now.getMinutes();
  const next = todayClasses.find((cls) => {
    if (cls.type === "break" || cls.type === "free") return false;
    const { hour, minute } = parseTime(cls.time.split("-")[0]);
    return hour * 60 + minute > currentTime;
  });
  if (next) {
    msg = `
🎓 *Class Notification*
━━━━━━━━━━━━━━━
📚 Subject: *${next.subject}*
👨‍🏫 Faculty: ${next.faculty || "N/A"}
⏰ Time: \`${next.time}\`
  `;
    return msg;
  }
  return false;
}

function upcomingClasses() {
  const now = new Date();
  const days = Object.keys(mcaITimetable.schedule);
  const today = days[now.getDay() - 1]; // getDay() -> Sunday=0
  const todayClasses = mcaITimetable.schedule[today] || [];
  let msg = "";

  const currentTime = now.getHours() * 60 + now.getMinutes();
  const upcoming_classes = todayClasses.filter((cls) => {
    if (cls.type === "break" || cls.type === "free") return false;
    const { hour, minute } = parseTime(cls.time.split("-")[0]);
    return hour * 60 + minute > currentTime;
  });
  if (upcoming_classes.length > 0) {
    upcoming_classes.forEach((next) => {
      msg += `
🎓 *Class Notification*
━━━━━━━━━━━━━━━
📚 Subject: *${next.subject}*
👨‍🏫 Faculty: ${next.faculty || "N/A"}
⏰ Time: \`${next.time}\`
  `;
    });
    return msg;
  }
  return false;
}

bot.onText(/\/nextclass/, async (msg) => {
  const hasNext = nextClassesHandler();
  if (hasNext) {
    await bot.sendMessage(msg.chat.id, hasNext, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });
  } else {
    bot.sendMessage(msg.chat.id, `🎉 All classes are over for today!`);
  }
});
bot.onText(/\/upcoming/, async (msg) => {
  const hasNext = upcomingClasses();
  if (hasNext) {
    await bot.sendMessage(msg.chat.id, hasNext, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });
  } else {
    bot.sendMessage(msg.chat.id, `🎉 All classes are over for today!`);
  }
});

function todayScheduleHandler() {
  const now = new Date();
  const days = Object.keys(mcaITimetable.schedule);
  const today = days[now.getDay() - 1]; // getDay() -> Sunday=0
  const todayClasses = mcaITimetable.schedule[today] || [];
  let msgString = `
🎓 *Class Notification*
    ━━━━━━━━━━━━━━━
`;
  todayClasses.forEach((cls) => {
    msgString += `
━━━━━━━━━━━━━━━━
📚 Subject: <b>${cls.subject}</b>
👨‍🏫 Faculty: <b>${cls.faculty || "N/A"}</b>
⏰ Time: <b>${cls.time}</b>
 `;
  });
  return msgString;
}

bot.onText(/\/today/i, async (msg) => {
  await bot.sendMessage(msg.chat.id, todayScheduleHandler(), {
    parse_mode: "HTML",
    disable_web_page_preview: true,
  });
});

bot.on("callback_query", async (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;
  if (data === "next_class") {
    const hasNext = nextClassesHandler();
    if (hasNext) {
      await bot.sendMessage(msg.chat.id, hasNext, INLINE_KEYBOARD_LIST);
    } else {
      bot.sendMessage(
        msg.chat.id,
        `🎉 All classes are over for today!`,
        INLINE_KEYBOARD_LIST
      );
    }
  }
  if (data === "today_schedule") {
    bot.sendMessage(msg.chat.id, todayScheduleHandler(), INLINE_KEYBOARD_LIST);
  }
  if (data === "upcoming_classes") {
    const hasNext = upcomingClasses();
    if (hasNext) {
      await bot.sendMessage(msg.chat.id, hasNext, INLINE_KEYBOARD_LIST);
    } else {
      bot.sendMessage(
        msg.chat.id,
        `🎉 All classes are over for today!`,
        INLINE_KEYBOARD_LIST
      );
    }
  }
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text) {
    return;
  } else {
    bot.sendMessage(
      chatId,
      "⛔ Sorry, I only accept text messages. Please do not send files, stickers, or photos."
    );
  }
});

bot.on("polling_error", async (error) => {
  console.error("Polling error:", error);
});
bot.on("webhook_error", async (error) => {
  console.error("Webhook error:", error);
});

app.use(express.json());
app.get("/", (req, res, next) => {
  res.send("Hello, World! This is the Class Schedule Bot is running.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
console.log("🕒 Class reminder bot is running...");
