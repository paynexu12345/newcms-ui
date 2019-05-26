import { Menu } from 'projects/cms-common/src/public-api';

export const MENUS_CONTENT:Menu[] = [
  {
    name: "Dashboard",
    nameForUrl: "dashboard",
    url: "/content/dashboard",
    isActive: true,
    icon: "icon-dashboard"
  },
  {
    name: "Program",
    nameForUrl: "program",
    icon: "icon-tv-pause",
    isActive: false,
    permissionRels:["*"],
    children: [
      {
        name: "Library",
        nameForUrl: "library",
        url: "/content/program/library",
        isActive: true,
        permissionRels:["/content/v1/programs*"]
      },
      {
        name: "Upload",
        nameForUrl: "upload",
        url: "/content/program/upload",
        isActive: true,
        permissionRels:["/content/v1/programs*"]
      },
      {
        name: "Category",
        nameForUrl: "category",
        url: "/content/program/category",
        isActive: true,
        permissionRels:["/content/v1/categories*"]
      },
      {
        name: "Tags",
        nameForUrl: "tags",
        url: "/content/program/tags",
        isActive: true,
        permissionRels:["/content/v1/tags*"]
      },
      {
        name: "Most Popular",
        nameForUrl: "most-popular",
        url: "/content/program/most-popular",
        isActive: true,
        permissionRels:["*"]
      }
    ]
  },
  {
    name: "Linear Channel",
    nameForUrl: "linear-channel",
    icon: "icon-linear",
    isActive: false,
    permissionRels:["/content/v1/linearChannels*","/content/v1/epgs*"],
    children: [
      {
        name: "Channel",
        nameForUrl: "channel",
        url: "/content/linear-channel/channel",
        isActive: false,
        permissionRels:["/content/v1/linearChannels*"]
      },
      {
        name: "EPG",
        nameForUrl: "EPG",
        url: "/content/linear-channel/epg",
        isActive: false,
        permissionRels:["/content/v1/epgs*"]
      }
    ]
  },
  {
    name: "Schedule",
    nameForUrl: "schedule",
    icon: "icon-schedule",
    isActive: false,
    permissionRels:["*"],
    children: [
      {
        name: "Live Event",
        nameForUrl: "event",
        url: "/content/schedule/event",
        isActive: true,
        permissionRels:["*"]
      },
      {
        name: "Game Schedule",
        nameForUrl: "game",
        url: "/content/schedule/game",
        isActive: true,
        permissionRels:["/content/v1/games*"]
      },
      {
        name: "Team",
        nameForUrl: "team",
        url: "/content/schedule/team",
        isActive: true,
        permissionRels:["/content/v1/teams*"]
      },
      {
        name: "League",
        nameForUrl: "league",
        url: "/content/schedule/league",
        isActive: true,
        permissionRels:["/content/v1/leagues*","/content/v1/divisions*","/content/v1/groups*"]
      },
      {
        name: "Sport",
        nameForUrl: "sport",
        url: "/content/schedule/sport",
        isActive: true,
        permissionRels:["/content/v1/sports*"]
      },
      {
        name: "Game Type",
        nameForUrl: "game-type",
        url: "/content/schedule/game-type",
        isActive: true,
        permissionRels:["/content/v1/gameTypes*"]
      },
      {
        name: "Game Pack",
        nameForUrl: "game-pack",
        url: "/content/schedule/game-pack",
        isActive: true,
        permissionRels:["/content/v1/gamePacks*"]
      }
    ]
  },
  {
    name: "Application",
    nameForUrl: "application",
    icon: "icon-application",
    isActive: false,
    permissionRels:["*"],
    children: [
      {
        name: "Site Navigation",
        nameForUrl: "site-navigation",
        url: "/content/application/site-navigation",
        isActive: true,
        permissionRels:["/content/v1/navigations*"]
      },
      {
        name: "Dynamic Lead",
        nameForUrl: "dynamic-lead",
        url: "/content/application/dynamic-lead",
        isActive: true,
        permissionRels:["/content/v1/dynamicLeads*"]
      },
      {
        name: "Ad Banners",
        nameForUrl: "ad-banners",
        url: "/content/application/ad-banners",
        isActive: true,
        permissionRels:["/content/v1/adbanners*"]
      },
      {
        name: "Ticker",
        nameForUrl: "ticker",
        url: "/content/application/ticker",
        isActive: true,
        permissionRels:["/content/v1/tickers*"]
      },
      {
        name: "Poll",
        nameForUrl: "poll",
        url: "/content/application/poll",
        isActive: true,
        permissionRels:["*"]
      }
    ]
  },
  {
    name: "Syndication",
    nameForUrl: "syndication",
    icon: "icon-syndication",
    isActive: false,
    children: [
      {
        name: "Syndication Partners",
        nameForUrl: "partners",
        url: "/content/syndication/partners",
        isActive: true,
        permissionRels:["/admin/v1/partners*"]
      },
      {
        name: "Syndication Task",
        nameForUrl: "task",
        url: "/content/syndication/task",
        isActive: true,
        permissionRels:["*"]
      }
    ]
  }
]