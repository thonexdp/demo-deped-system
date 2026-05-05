export const divisionNavSections = [
  {
    title: "Division Overview",
    items: [
      {
        label: "Division Dashboard",
        icon: "mdi mdi-domain",
        path: "/admin",
      },
      { label: "All Schools", icon: "mdi mdi-school-outline", path: "/admin/all-schools" },
      {
        label: "Risk Monitoring",
        icon: "mdi mdi-alert-outline",
        path: "/admin/risk-monitoring",
      },
    ],
  },
  {
    title: "Reporting",
    items: [
      {
        label: "SMEA / PIR - Division",
        icon: "mdi mdi-chart-box-outline",
        path: "/admin/smea-pir-division",
      },
      {
        label: "PMES - Division View",
        icon: "mdi mdi-clipboard-text-outline",
        path: "/admin/pmes-division",
      },
      {
        label: "Enrolment Analytics",
        icon: "mdi mdi-chart-areaspline",
        path: "/admin/enrolment-analytics",
      },
      { label: "Grade Analytics", icon: "mdi mdi-chart-line", path: "/admin/grade-analytics" },
      {
        label: "Attendance Analytics",
        icon: "mdi mdi-calendar-check",
        path: "/admin/attendance-analytics",
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        label: "All Accounts",
        icon: "mdi mdi-account-multiple-outline",
        path: "/admin/all-accounts",
      },
      { label: "Teacher Accounts", icon: "mdi mdi-teach", path: "/admin/teacher-accounts" },
      { label: "Parent Accounts", icon: "mdi mdi-account-group", path: "/admin/parent-accounts" },
      {
        label: "Add / Invite Users",
        icon: "mdi mdi-account-plus-outline",
        path: "/admin/add-invite-users",
      },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Settings", icon: "mdi mdi-cog-outline", path: "/admin/settings" },
      {
        label: "Data Export",
        icon: "mdi mdi-database-export-outline",
        path: "/admin/data-export",
      },
      { label: "Audit logs", icon: "mdi mdi-shield-check-outline", path: "/admin/audit-logs" },
    ],
  },
];
