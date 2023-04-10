import Banner from "./components/Banner";
import CTAButton from "./components/CTAButton";
import PhoneMockup from "./components/PhoneMockup";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
    GridComponent,
    TitleComponent,
    LegendComponent,
    TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMastodon } from "@fortawesome/free-brands-svg-icons";
import Footer from "./components/Footer";

echarts.use([
    TitleComponent,
    GridComponent,
    BarChart,
    CanvasRenderer,
    LegendComponent,
    TooltipComponent,
]);

var vintageColorPalette = [
    "#d87c7c",
    "#919e8b",
    "#d7ab82",
    "#6e7074",
    "#61a0a8",
    "#efa18d",
    "#787464",
    "#cc7e63",
    "#724e58",
    "#4b565b",
];
echarts.registerTheme("vintage", {
    color: vintageColorPalette,
    backgroundColor: "#ffffff",
    graph: {
        color: vintageColorPalette,
    },
});
var darkColorPalette = [
    "#4992ff",
    "#7cffb2",
    "#fddd60",
    "#ff6e76",
    "#58d9f9",
    "#05c091",
    "#ff8a45",
    "#8d48e3",
    "#dd79ff",
];
var contrastColor = "#B9B8CE";
var backgroundColor = "#100C2A";
var axisCommon = function () {
    return {
        axisLine: {
            lineStyle: {
                color: contrastColor,
            },
        },
        splitLine: {
            lineStyle: {
                color: "#484753",
            },
        },
        splitArea: {
            areaStyle: {
                color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"],
            },
        },
        minorSplitLine: {
            lineStyle: {
                color: "#20203B",
            },
        },
    };
};
var darkTheme = {
    darkMode: true,

    color: darkColorPalette,
    backgroundColor: backgroundColor,
    axisPointer: {
        lineStyle: {
            color: "#817f91",
        },
        crossStyle: {
            color: "#817f91",
        },
        label: {
            // TODO Contrast of label backgorundColor
            color: "#fff",
        },
    },
    legend: {
        textStyle: {
            color: contrastColor,
        },
    },
    textStyle: {
        color: contrastColor,
    },
    title: {
        textStyle: {
            color: "#EEF1FA",
        },
        subtextStyle: {
            color: "#B9B8CE",
        },
    },
    toolbox: {
        iconStyle: {
            borderColor: contrastColor,
        },
    },
    dataZoom: {
        borderColor: "#71708A",
        textStyle: {
            color: contrastColor,
        },
        brushStyle: {
            color: "rgba(135,163,206,0.3)",
        },
        handleStyle: {
            color: "#353450",
            borderColor: "#C5CBE3",
        },
        moveHandleStyle: {
            color: "#B0B6C3",
            opacity: 0.3,
        },
        fillerColor: "rgba(135,163,206,0.2)",
        emphasis: {
            handleStyle: {
                borderColor: "#91B7F2",
                color: "#4D587D",
            },
            moveHandleStyle: {
                color: "#636D9A",
                opacity: 0.7,
            },
        },
        dataBackground: {
            lineStyle: {
                color: "#71708A",
                width: 1,
            },
            areaStyle: {
                color: "#71708A",
            },
        },
        selectedDataBackground: {
            lineStyle: {
                color: "#87A3CE",
            },
            areaStyle: {
                color: "#87A3CE",
            },
        },
    },
    visualMap: {
        textStyle: {
            color: contrastColor,
        },
    },
    timeline: {
        lineStyle: {
            color: contrastColor,
        },
        label: {
            color: contrastColor,
        },
        controlStyle: {
            color: contrastColor,
            borderColor: contrastColor,
        },
    },
    calendar: {
        itemStyle: {
            color: backgroundColor,
        },
        dayLabel: {
            color: contrastColor,
        },
        monthLabel: {
            color: contrastColor,
        },
        yearLabel: {
            color: contrastColor,
        },
    },
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),

    line: {
        symbol: "circle",
    },
    graph: {
        color: darkColorPalette,
    },
    gauge: {
        title: {
            color: contrastColor,
        },
    },
    candlestick: {
        itemStyle: {
            color: "#FD1050",
            color0: "#0CF49B",
            borderColor: "#FD1050",
            borderColor0: "#0CF49B",
        },
    },
};
echarts.registerTheme("dark", darkTheme);

const labelOption = {
    show: true,
    rotate: 90,
    align: "left",
    verticalAlign: "middle",
    position: "insideBottom",
    distance: 15,
    formatter: "{c}  {name|{a}}",
    fontSize: 16,
    rich: {
        name: {},
    },
};

interface TeamMember {
    name: string;
    avatar: string;
    links: {
        name: "GitHub" | "Mastodon";
        link: string;
    }[];
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Landon Colburn",
        avatar: "https://cdn.discordapp.com/avatars/407971737607864322/47ec99d2773d9e7c9f28d25803949a68.png?size=2048",
        links: [
            { name: "GitHub", link: "https://github.com/landoncolburn" },
            { name: "Mastodon", link: "@landon@fosstodon.org" },
        ],
    },
    {
        name: "Garizaldy Gerra",
        avatar: "https://cdn.discordapp.com/avatars/191010905096585216/50dea1b9e3904e0aefce63ae4b2a3315.png?size=2048",
        links: [
            { name: "GitHub", link: "https://github.com/" },
            { name: "Mastodon", link: "@landon@fosstodon.org" },
        ],
    },
    {
        name: "Raul Gonzales",
        avatar: "https://cdn.discordapp.com/avatars/595405457301045248/3db878d62ddf1a6ef2de3468767af319.png?size=2048",
        links: [
            { name: "GitHub", link: "https://github.com/" },
            { name: "Mastodon", link: "@landon@fosstodon.org" },
        ],
    },
    {
        name: "Nicolas Brandt-Ganding",
        avatar: "https://cdn.discordapp.com/avatars/144975991629021184/49614b1422783dc2bcabc0a8cf224f0b.png?size=2048",
        links: [
            { name: "GitHub", link: "https://github.com/" },
            { name: "Mastodon", link: "@landon@fosstodon.org" },
        ],
    },
    {
        name: "Jaspreet Singh",
        avatar: "https://cdn.discordapp.com/avatars/725207478723412010/af1d71ee75df7df7e9b49736b50c3a66.png?size=2048",
        links: [
            { name: "GitHub", link: "https://github.com/" },
            { name: "Mastodon", link: "@landon@fosstodon.org" },
        ],
    },
];

const icons = {
    GitHub: <FontAwesomeIcon icon={faGithub} />,
    Mastodon: <FontAwesomeIcon icon={faMastodon} />,
};

function App() {
    return (
        <div className="bg-slate-200 dark:bg-slate-800 w-full flex flex-col items-center gap-16">
            <Banner />
            <div className="max-w-3xl flex flex-col gap-8">
                <h1 className="text-7xl font-semibold dark:text-white">
                    Become your best self with HabitHero
                </h1>
                <div className="flex flex-row gap-8">
                    <CTAButton
                        name={"Download for Android"}
                        link={
                            "https://code.cs.umanitoba.ca/comp3350-winter2023/a01-g10-habithero"
                        }
                        color={"primary"}
                    />
                    <CTAButton
                        name={"Source Code"}
                        link={
                            "https://code.cs.umanitoba.ca/comp3350-winter2023/a01-g10-habithero"
                        }
                        color={"secondary"}
                    />
                </div>
            </div>
            <PhoneMockup />
            <div className="max-w-5xl p-16 -mt-44 dark:text-white flex flex-row gap-16 text-center dark:bg-black/50 bg-white/70 backdrop-blur-xl">
                <div>
                    <h1 className="text-xl font-semibold">Habit Tracking</h1>
                    <p>
                        Add habits, routines, and workouts to make progress
                        towards becoming your best self!
                    </p>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Goal Keeping</h1>
                    <p>
                        Set goals, track streaks and make change! HabitHero is
                        designed to keep you pushing for your best.
                    </p>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Progress Logging</h1>
                    <p>
                        The beautiful logging features provide meaningful
                        insight on your progress to keep motiviated.
                    </p>
                </div>
            </div>
            <div className="h-8"></div>
            <div className="max-w-4xl dark:text-white flex flex-col gap-6">
                <h2 className="text-4xl font-semibold">Our Vision</h2>
                <p>
                    The habit-tracking app, HabitHero, will be used to track a
                    user's habits on a day-to-day basis, and to create a
                    competitive incentive for users to continue improving and
                    maintaining good lifestyle habits. This app will have
                    similar features to different habit-tracking applications
                    such as a calendar, records of habit entries, daily
                    notifications, and an interface that makes logging and
                    tracking habits easy. In addition, the HabitHero app will
                    create an incentive to continue these lifestyle changes by
                    tracking statistics about the users habits and working
                    towards user-defined goals. The app will also have baked in
                    achievements for significant milestones while keeping up
                    with their habits. This can include reaching a 100 day
                    streak, or having a perfect week across several habits.
                </p>
                <p>
                    HabitHero will be designed for anyone with a mobile device
                    that wants assistance in maintaining and documenting their
                    habit consistency and progress. Useful insights and
                    statistics will also be provided to the users to help push
                    themselves beyond what they previously achieved. While the
                    app is designed with students and gym goers in mind, habits
                    will be user defined allowing the documentation of all types
                    of habits. This could be things like household chores,
                    personal hygiene, mindfulness and well-being, or many other
                    possibilities. Since our app requires manual user input, the
                    target age range would be ages 10 and up.
                </p>
                <p>
                    Users will be able to track their personal progress and see
                    themselves grow and improve over time. Users will have a
                    dashboard that lets them see a general overview of their
                    habit progress that day, and which habits still have yet to
                    be completed. They will also have the ability to create and
                    track new habits, delete or edit existing habits, create
                    custom goals associate to habits, and receive reminders or
                    notifications that will help users stay on track and reach
                    their habit goals. Achievements will also be rewarded to
                    users as they exceed set thresholds or attain high streaks
                    of completed habit goals.
                </p>
                <p>
                    A unique feature that sets HabitHero apart from other
                    habit-tracking apps is its deeply customizable and
                    integrate-able sharing of information. We use a common and
                    publicly available format designed by our team for your
                    habits, history, and goals to allow integration with many
                    other services. This allows for things like competing with
                    friends, tracking personal growth outside the app, and
                    finding trends over time. The idea is to develop an
                    ecosystem of rich and meaningful integrations suited for the
                    betterment of our users. Anyone is able to use this format
                    to create whatever their heart desires.
                </p>
                <p>
                    This application is envisioned as an android mobile app and
                    will remain an android app for the foreseeable future. The
                    success criteria for HabitHero would be that at least 80% of
                    users prefer using the app over other habit-tracking apps.
                    Another measure of success is that users are able to meet
                    their habit goals 90% of the time in a span of one month and
                    maintain usage of the app as they improve their healthy
                    habits. These values can be measured through future surveys.
                </p>
            </div>
            <div className="max-w-4xl dark:text-white flex flex-col gap-6">
                <h2 className="text-4xl font-semibold text-center mb-8">
                    Meet the team
                </h2>

                <div className="flex flex-row flex-wrap gap-16 justify-center">
                    {TEAM_MEMBERS.map((member, i) => (
                        <div
                            key={i}
                            className="w-48 flex flex-col items-center gap-2"
                        >
                            <img
                                src={member.avatar}
                                alt="profile picture"
                                className="w-32 h-32 bg-black rounded-full mb-4"
                            />
                            <h3>{member.name}</h3>
                            <div className="flex justify-evenly w-full">
                                {member.links.map(({ name, link }, j) => (
                                    <a key={j + " " + i} href={link}>
                                        {icons[name]}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-4xl dark:text-white flex flex-col gap-6">
                <h2 className="text-4xl font-semibold text-left mb-8">
                    Post-mortem
                </h2>
                <p>
                    Our system architecture focused on a modular approach to
                    Android development, opting to use Fragments to contain our
                    interface design, and ViewControllers to contain our
                    busniess logic. We ultimately chose this approach due to our
                    familiarity with iOS development, and the fluid DX
                    (developer expierence) we can expect to transition into
                    Android. Looking back on this now, our application is not as
                    dynamic as our architecture may be designed for, introducing
                    extra overhead where it is not required (for example, our
                    data bindings are reactive at a system level, but we opt to
                    manually refresh our data to better follow along with the
                    course).
                </p>
                <p>
                    During the development process, much of our project was
                    smooth sailing. Our team developed good chemistry with each
                    other and we learned to rely on each individuals stengths
                    instead of trying to share everything. We had the majority
                    of our user interface and testing developed quickly, and the
                    persistance followed shortly thereafter. All of our group
                    members got along with each other, and the group was active
                    in chat or voice outside of classroom hours.
                </p>
                <p>
                    Some items that went wrong were issues that got swept up
                    into the pile of completed tasks, without fully being tested
                    and working, and minor bugs throughout our application. Near
                    the end of the project we had to do some refactoring on some
                    layout components, and database tables to allow for the
                    remaining features to be implemented - requiring us to go
                    back and clean up some techincal debt, but our team members
                    handled this task with no trouble.
                </p>
                <p>
                    If we had the chance to start over, we would do a better job
                    of planning our user interface and database layout before
                    beginning the project to prevent any issues that may arise
                    in the future. This project has allowed us to understand the
                    major role in software development that planning and
                    organization take, espicailly when working with other group
                    members.
                </p>
                <p>
                    Our project has 207 public members, and 89 private members
                    across 49 different classes. Our test suite has 59 public
                    members and 27 private members across 27 classes. Our
                    project has 2579 lines of code, with 736 lines in our
                    testing codebase. Approximatly half of this code is
                    responsible for Habits themselves and managing their data,
                    with another 25% dedicated to the goals and streaks.
                </p>
                <div>
                    <ReactEChartsCore
                        echarts={echarts}
                        option={{
                            tooltip: {
                                trigger: "axis",
                                axisPointer: {
                                    type: "shadow",
                                },
                            },
                            xAxis: {
                                type: "category",
                                data: ["Iteration 1", "Iteration 2"],
                                name: "Project Milestone",
                                nameLocation: "center",
                                nameGap: 40,
                            },
                            yAxis: {
                                type: "value",
                                name: "Time (Hours)",
                                nameLocation: "center",
                                nameGap: 50,
                            },
                            series: [
                                {
                                    name: "Actual",
                                    label: labelOption,
                                    type: "bar",
                                    data: [164.5, 247.25],
                                },
                                {
                                    name: "Projected",
                                    label: labelOption,
                                    data: [168, 216],
                                    type: "bar",
                                },
                            ],
                        }}
                        style={{ height: "500px", marginBottom: "1rem" }}
                        lazyUpdate={true}
                        theme={
                            window.matchMedia("(prefers-color-scheme: dark)")
                                .matches
                                ? "dark"
                                : "vintage"
                        }
                    />
                    <figure className="text-black/50 dark:text-white/70">
                        Figure 1: Current velocity statistics for HabitHero
                        project (iteration 3)
                    </figure>
                </div>
                <p>
                    About 50% of the time spent on our project was interface
                    related, statistics for XML resources were not included in
                    the above counts, resource files contributed an additional
                    1342 lines to our project across 45 files.
                </p>
                <p>
                    Plenty of brilliant design decisions have been made in our
                    project contributed from all 5 team members. One notable
                    code smell is our need to manually update the state of the
                    application in some contexts when adding or removing data.
                    We would like to refactor this databinding if time allowed
                    for it, but unfortunatly other issues and features took
                    priority. As of right now we have one outstanding bug that
                    is being investigated, Java's garbage collector is
                    collecting a callback function before it should leading to
                    us calling a method on a non-existant resource.
                </p>
                <p>
                    The database, calendar, and notifications all work way
                    better than any of us would've originally envisioned. The
                    test suites and interface are also key features in our
                    project that had lots of work put into them with big
                    returns. Finally the project as a whole went smoother than
                    expected.
                </p>
                <p>
                    On the technical side of things, we are using
                    React+Typescript for the website and for the interface we
                    are using a RecylerView to save on performance. For our
                    notifications we are using the Android API. For the team
                    management side of things, we have been using both scrums
                    and code reviews - both of which we were introduced to
                    through the course. We've been holding weekly meetings where
                    we assign taskings and create sprints to accomplish
                    meaningful work before meeting again next week to discuss
                    progress and reevaluate our next sprint.
                </p>
                <p>
                    Since the beginning of our project, our scope has shifted
                    several times. Originally we planned to do server-side
                    development for competitive features, but after adjusting
                    our scope we decided to focus on self-competition. We also
                    had features involving the 75 HARD challange planned earlier
                    in the semester, but for a variety of reasons we had to
                    spend more time on other features in the project and didn't
                    manage to deliver the feature on time. The project was a
                    learning expierence for us in terms of setting reasonable
                    expectations and preventing scope-creep.
                </p>
                <p>
                    Once again, we learned the importance of organization and
                    communication in a collaboritve environment, and next time
                    we will put an even larger emphasis on these principles in
                    our careers. Next time we will try and develop a more rigid
                    plan in the earlier stages of development to prevent needing
                    to re-organize and shift goals on the fly.
                </p>
                <p>
                    Our conclusion is that software development is a highly
                    essential component of large team work, and without
                    following the princples taught in this course projects of
                    even small scale would be tremendiuosly difficult to
                    develop.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default App;
