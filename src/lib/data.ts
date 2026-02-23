export interface Member {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  status: "active" | "quiet" | "at-risk";
  attendanceRate: number;
  lastActive: string;
  cantDo?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  attending: number;
  maybe: number;
  noResponse: number;
  isRecurring?: boolean;
}

export interface FeedItem {
  id: string;
  type: "event" | "milestone" | "nudge" | "suggestion";
  title: string;
  content: string;
  meta?: string;
  actionLabel?: string;
}

export const members: Member[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@email.com",
    status: "active",
    attendanceRate: 100,
    lastActive: "2 days ago",
  },
  {
    id: "2",
    name: "Maria Lopez",
    email: "maria@email.com",
    status: "active",
    attendanceRate: 90,
    lastActive: "1 day ago",
  },
  {
    id: "3",
    name: "Alex Chen",
    email: "alex@email.com",
    status: "active",
    attendanceRate: 80,
    lastActive: "3 days ago",
  },
  {
    id: "4",
    name: "Jenny Martinez",
    email: "jenny@email.com",
    status: "at-risk",
    attendanceRate: 40,
    lastActive: "3 weeks ago",
    cantDo: "Tuesdays",
  },
  {
    id: "5",
    name: "Taylor Kim",
    email: "taylor@email.com",
    status: "quiet",
    attendanceRate: 50,
    lastActive: "2 weeks ago",
  },
  {
    id: "6",
    name: "Rachel Green",
    email: "rachel@email.com",
    status: "active",
    attendanceRate: 85,
    lastActive: "1 day ago",
  },
];

export const events: Event[] = [
  {
    id: "1",
    title: "Monthly Book Club — Tomorrow, and Tomorrow, and Tomorrow",
    date: "Thursday, Feb 27",
    time: "7:00 PM",
    attending: 6,
    maybe: 2,
    noResponse: 3,
  },
  {
    id: "2",
    title: "Monthly Book Club",
    date: "Thursday, Mar 27",
    time: "7:00 PM",
    attending: 0,
    maybe: 0,
    noResponse: 11,
    isRecurring: true,
  },
];

export const feedItems: FeedItem[] = [
  {
    id: "1",
    type: "event",
    title: "Upcoming Event",
    content: "Monthly Book Club — Discussing \"Tomorrow, and Tomorrow, and Tomorrow\"",
    meta: "Thursday, Feb 27 • 7:00 PM • 6 attending • 2 maybe • 3 no response",
    actionLabel: "Nudge the 3",
  },
  {
    id: "2",
    type: "milestone",
    title: "🎉 Milestone",
    content: "Your group is 4 months strong! That's in the top 15% of book clubs.",
    actionLabel: "Share achievement",
  },
  {
    id: "3",
    type: "nudge",
    title: "Member Update",
    content: "Sarah has been quiet lately (missed last 2). Suggested nudge: \"Hey Sarah! We miss you. Can you make it this Thursday? ☕\"",
    actionLabel: "Send",
  },
  {
    id: "4",
    type: "suggestion",
    title: "Next Meeting Suggestion",
    content: "Based on availability, we recommend: Tuesday, March 4 at 7:00 PM (Jenny's available, Sarah's back in town)",
    actionLabel: "Schedule this",
  },
];

export const groupStats = {
  healthScore: 4, // out of 5
  attendance: 82,
  rsvpRate: 87,
  groupAge: "4 months",
};
