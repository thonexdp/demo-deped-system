import RiskPageTemplate from '../../components/RiskPageTemplate'
import { headNavSections } from './navigation'

const badges = [
  { text: 'Head Teacher / Principal', style: { backgroundColor: '#F5F3FF', color: '#5B21B6', border: '1px solid #DDD6FE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Risk View', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function HeadTeacherEarlyWarningPage() {
  return (
    <RiskPageTemplate
      activePath="/headteachers/early-warning"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'School-wide risk and intervention monitoring.',
      }}
      heading="Early Warning Risk Dashboard"
      subheading="Head Teacher Risk View"
      topBadges={badges}
      contextText="Head Teacher / Principal • Early Warning System"
      contextNotice="School-wide risk cases with escalation and SLA monitoring."
    />
  )
}
