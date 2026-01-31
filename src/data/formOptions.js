import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  location: Yup.string().required("Location is required"),
  city: Yup.string().required("City is required"),
  stateProvince: Yup.string().required("State/Province is required"),
  birthday: Yup.date().required("Birthday is required"),
  ageDemography: Yup.string().required("Age demography is required"),
  gender: Yup.string().required("Gender is required"),
  maritalStatus: Yup.string().required("Marital status is required"),
  employmentStatus: Yup.string().required("Employment status is required"),
  completedMembershipClass: Yup.string().required("This field is required"),
  hearAboutTGGC: Yup.string().required("This field is required"),
  preferredTimeOfCall: Yup.string().required("This field is required"),
  prayerRequest: Yup.string(),
  profession: Yup.string(),
  interests: Yup.string(),
  otherInterests: Yup.string(),
  serviceUnit: Yup.string().required("Service unit is required"),
  campusAttended: Yup.string().required("Campus attended is required"),
  emergencyContactFirstName: Yup.string().required(
    "Emergency contact first name is required",
  ),
  emergencyContactLastName: Yup.string().required(
    "Emergency contact last name is required",
  ),
  emergencyContactEmail: Yup.string()
    .email("Invalid email address")
    .required("Emergency contact email is required"),
  emergencyContactPhone: Yup.string().required(
    "Emergency contact phone is required",
  ),
});

export const ageDemographyOptions = [
  { value: "", label: "Select age demography" },
  { value: "under18", label: "Under 18" },
  { value: "18-25", label: "18-25" },
  { value: "26-35", label: "26-35" },
  { value: "36-45", label: "36-45" },
  { value: "46-55", label: "46-55" },
  { value: "56+", label: "56+" },
];

export const maritalStatusOptions = [
  { value: "", label: "Select marital status" },
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
];

export const employmentStatusOptions = [
  { value: "", label: "Select employment status" },
  { value: "employed-9-5", label: "Employed (9 - 5)" },
  { value: "employed-flexible", label: "Employed (Flexible Hours)" },
  { value: "self-employed", label: "Self Employed" },
  { value: "unemployed", label: "Unemployed" },
  { value: "student", label: "Student" },
  { value: "retired", label: "Retired" },
];

export const interestOptions = [
  { value: "stem", label: "STEM" },
  { value: "professionals", label: "Professionals" },
  { value: "business", label: "Business" },
  { value: "creatives", label: "Creatives" },
];

export const serviceUnitOptions = [
  { value: "ambience", label: "Ambience and Sanitation" },
  { value: "axios", label: "Axios (Engineering and Tech)" },
  { value: "celebkids", label: "Celebkids" },
  { value: "celebteens", label: "Celebteens" },
  { value: "comms", label: "Comms" },
  { value: "sound-light", label: "Sound and Light" },
  { value: "photography", label: "Photography" },
  { value: "projection", label: "Projection" },
  { value: "protocol", label: "Protocol" },
  { value: "videography", label: "Videography and Streaming" },
  { value: "na", label: "N/A" },
];

export const campusOptions = [
  { value: "", label: "Select a branch" },
  { value: "lagos-mainland", label: "Lagos - Mainland" },
  { value: "lagos-island", label: "Lagos - Island" },
  { value: "abuja", label: "Abuja" },
  { value: "portharcourt", label: "Port Harcourt" },
];

export const hearAboutTGGCOptions = [
  {
    value: "family_member",
    label: "Family Member",
  },
  {
    value: "social_media",
    label: "Social Media",
  },
  {
    value: "colleague_at_work",
    label: "Colleague at work",
  },
  {
    value: "friend",
    label: "Friend",
  },
  {
    value: "flyer",
    label: "Flyer / Poster",
  },
  {
    value: "website",
    label: "Church Website",
  },
  {
    value: "other",
    label: "Other",
  },
];
export const preferredTimeOfCallOptions = [
  { value: "", label: "Select time" },
  { value: "anytime", label: "Anytime" },
  { value: "8am - 11:59am", label: "8am - 11:59am" },
  { value: "12noon - 3pm", label: "12noon - 3pm" },
  { value: "3pm - 6pm", label: "3pm - 6pm" },
  { value: "6pm - 8pm", label: "6pm - 8pm" },
];
