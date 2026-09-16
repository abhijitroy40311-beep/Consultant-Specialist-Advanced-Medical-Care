import { Activity, ShieldCheck, Stethoscope, Microscope, HeartPulse, User, Users, Globe } from 'lucide-react';

export const services = [
  {
    id: 'executive-health',
    slug: 'executive-health',
    title: 'Executive Health Consultation',
    icon: User,
    shortDescription: 'Comprehensive, time-efficient medical evaluations designed for busy professionals.',
    whoIsItFor: 'Executives, business leaders, and busy professionals requiring thorough health assessments without prolonged clinical delays.',
    whyChoose: 'This consultation minimizes disruption to your schedule while providing an exceptionally deep dive into your current health metrics, cardiovascular risk, and stress-related physiological impacts.',
    whatHappens: 'A detailed 90-minute private consultation reviewing your complete medical history, lifestyle factors, and an advanced suite of diagnostic tests pre-arranged for efficiency.',
    process: [
      { step: 1, title: 'Pre-Consultation Survey', description: 'Complete a secure digital health questionnaire before your visit.' },
      { step: 2, title: 'In-Depth Consultation', description: 'A thorough discussion of your health, concerns, and lifestyle.' },
      { step: 3, title: 'Diagnostic Review', description: 'Immediate arrangement or review of necessary imaging and blood work.' },
      { step: 4, title: 'Strategic Health Plan', description: 'A tailored, actionable roadmap for your health over the next 12 months.' }
    ],
    preparation: 'Please bring any previous medical records, a list of current medications, and fasting may be required if same-day blood tests are scheduled.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'preventive-health',
    slug: 'preventive-health',
    title: 'Preventive Health Assessment',
    icon: ShieldCheck,
    shortDescription: 'Proactive medical analysis to identify and mitigate future health risks before they develop.',
    whoIsItFor: 'Individuals who want to take control of their future health, especially those with a family history of chronic conditions.',
    whyChoose: 'Early detection changes outcomes. We use evidence-based screening to look beyond standard health checks, identifying subtle markers of future disease.',
    whatHappens: 'We assess your cardiovascular risk, metabolic health, oncological markers (where appropriate), and genetic predispositions to create a preventive strategy.',
    process: [
      { step: 1, title: 'Risk Stratification', description: 'Mapping your family history and personal risk factors.' },
      { step: 2, title: 'Targeted Diagnostics', description: 'Blood panels and scans focused on your specific risk profile.' },
      { step: 3, title: 'Clinical Review', description: 'A detailed walkthrough of your results and what they mean.' },
      { step: 4, title: 'Intervention Plan', description: 'Evidence-based lifestyle and medical interventions to lower your risks.' }
    ],
    preparation: 'Gather detailed information about your immediate family\'s medical history.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'specialist-consultation',
    slug: 'specialist-consultation',
    title: 'Specialist Medical Consultation',
    icon: Stethoscope,
    shortDescription: 'Expert diagnostic evaluation for undiagnosed symptoms or complex medical concerns.',
    whoIsItFor: 'Patients experiencing new, concerning, or undiagnosed symptoms who require an expert clinical opinion.',
    whyChoose: 'When symptoms are confusing or multiple systems are involved, a thorough, unhurried specialist evaluation is essential to connect the dots.',
    whatHappens: 'We take the time to listen to your entire story from the beginning. This involves a comprehensive physical examination and logical diagnostic reasoning.',
    process: [
      { step: 1, title: 'The Clinical Interview', description: 'Detailed timeline of your symptoms and how they affect you.' },
      { step: 2, title: 'Physical Examination', description: 'Targeted clinical examination based on your presentation.' },
      { step: 3, title: 'Diagnostic Pathway', description: 'Ordering the right tests to confirm or rule out diagnoses.' },
      { step: 4, title: 'Diagnosis & Treatment', description: 'Clear explanation of the problem and how we will address it.' }
    ],
    preparation: 'Keep a diary of your symptoms, noting when they occur, how long they last, and what makes them better or worse.',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'diagnostic-review',
    slug: 'diagnostic-review',
    title: 'Advanced Diagnostic Review',
    icon: Microscope,
    shortDescription: 'Second opinions and comprehensive reviews of existing medical tests, scans, and reports.',
    whoIsItFor: 'Patients who already have test results or a diagnosis but want a clear, expert explanation or a second opinion on their treatment options.',
    whyChoose: 'Medical jargon can be overwhelming. We translate complex reports into plain language and provide an independent perspective on your best path forward.',
    whatHappens: 'A meticulous review of your existing files. We explain what the findings mean, what might have been missed, and whether further investigation is needed.',
    process: [
      { step: 1, title: 'Document Collation', description: 'Secure transfer of your existing scans, blood tests, and medical notes.' },
      { step: 2, title: 'Pre-Review Analysis', description: 'Detailed study of your file prior to our meeting.' },
      { step: 3, title: 'The Consultation', description: 'Translating the medical data into clear, understandable insights.' },
      { step: 4, title: 'Recommendation', description: 'Independent advice on treatment options or further diagnostic steps.' }
    ],
    preparation: 'Ensure all relevant medical records, discharge summaries, imaging discs, and pathology reports are securely sent to our clinic prior to your appointment.',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'chronic-condition',
    slug: 'chronic-condition-management',
    title: 'Chronic Condition Management',
    icon: Activity,
    shortDescription: 'Long-term, personalized care strategies for managing complex ongoing health conditions.',
    whoIsItFor: 'Patients living with hypertension, diabetes, autoimmune conditions, or multiple overlapping health issues.',
    whyChoose: 'Managing a chronic illness requires continuity of care, frequent adjustments, and a doctor who understands how your condition impacts your daily life.',
    whatHappens: 'We establish a baseline, optimize your current medications, manage side effects, and create a sustainable long-term care strategy.',
    process: [
      { step: 1, title: 'Baseline Assessment', description: 'Evaluating the current control of your condition.' },
      { step: 2, title: 'Medication Optimization', description: 'Reviewing and adjusting therapies for maximum efficacy and minimal side effects.' },
      { step: 3, title: 'Lifestyle Integration', description: 'Practical advice on diet, exercise, and stress management.' },
      { step: 4, title: 'Ongoing Monitoring', description: 'Scheduled follow-ups and direct access for flare-ups or concerns.' }
    ],
    preparation: 'Bring all current medication packaging and any logs you keep (e.g., blood pressure readings, blood sugar diaries).',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'womens-health',
    slug: 'womens-health',
    title: 'Women\'s Health Consultation',
    icon: HeartPulse,
    shortDescription: 'Dedicated medical care addressing the specific physiological and hormonal health needs of women.',
    whoIsItFor: 'Women seeking expert guidance on hormonal health, menopause management, cardiovascular risk, or general well-being.',
    whyChoose: 'Women\'s health requires a nuanced approach. We provide unhurried consultations that respect your experiences and address your specific physiological needs.',
    whatHappens: 'Comprehensive evaluation of hormonal balance, bone density risks, cardiovascular health, and personalized strategies for different life stages.',
    process: [
      { step: 1, title: 'Comprehensive History', description: 'In-depth discussion of your symptoms and concerns.' },
      { step: 2, title: 'Targeted Evaluation', description: 'Specific diagnostic tests tailored to your life stage and symptoms.' },
      { step: 3, title: 'Treatment Discussion', description: 'Exploring evidence-based options, including hormonal and non-hormonal therapies.' },
      { step: 4, title: 'Follow-up Strategy', description: 'Monitoring progress and adjusting treatments as needed.' }
    ],
    preparation: 'Keep a symptom diary if related to your cycle, and note any specific questions about medications or therapies you\'ve researched.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'mens-health',
    slug: 'mens-health',
    title: 'Men\'s Health Consultation',
    icon: Users,
    shortDescription: 'Focused clinical assessment addressing cardiovascular, metabolic, and specific men\'s health concerns.',
    whoIsItFor: 'Men wanting to proactively address energy levels, cardiovascular risk, prostate health, or metabolic changes.',
    whyChoose: 'Many men delay seeking healthcare. We provide a straightforward, evidence-based approach in a professional, confidential environment.',
    whatHappens: 'A direct and thorough assessment of your key health metrics, focusing on heart health, metabolic function, and hormonal balance.',
    process: [
      { step: 1, title: 'Health Audit', description: 'Reviewing lifestyle, stress factors, and current health status.' },
      { step: 2, title: 'Key Diagnostics', description: 'Checking cholesterol, testosterone, PSA (if appropriate), and metabolic markers.' },
      { step: 3, title: 'Actionable Insights', description: 'Clear explanation of your risks and current health status.' },
      { step: 4, title: 'Performance Plan', description: 'Strategies to optimize energy, longevity, and overall health.' }
    ],
    preparation: 'Be prepared to discuss your exercise habits, alcohol intake, and stress levels honestly. Fasting may be required for certain blood tests.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'international-patient',
    slug: 'international-patient-care',
    title: 'International Patient Care',
    icon: Globe,
    shortDescription: 'Seamless medical coordination and clinical excellence for patients traveling from abroad.',
    whoIsItFor: 'International patients seeking premium medical expertise, second opinions, or complex care coordination in London.',
    whyChoose: 'Navigating healthcare in a new country is challenging. We provide a frictionless experience from the first digital enquiry to your in-person consultation and post-treatment follow-up.',
    whatHappens: 'We start with a secure video consultation to review your case before you travel. We then coordinate your in-person appointments and diagnostic tests to maximize your time in the UK.',
    process: [
      { step: 1, title: 'Initial Digital Enquiry', description: 'Secure submission of your medical history and specific needs.' },
      { step: 2, title: 'Video Consultation', description: 'Preliminary discussion to plan your required care and diagnostics.' },
      { step: 3, title: 'London Itinerary', description: 'Consolidated scheduling of your consultation and any required scans.' },
      { step: 4, title: 'Remote Follow-up', description: 'Continued care and communication after you return home.' }
    ],
    preparation: 'Ensure all medical records are translated to English where possible, and securely transmitted via our patient portal well in advance.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200'
  }
];
