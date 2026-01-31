import React from "react";
import { Formik, Form } from "formik";
import FormHeader from "../components/common/FormHeader";
import TextInput from "../components/common/TextInput";
import SelectInput from "../components/common/SelectInput";
import RadioGroup from "../components/common/RadioGroup";
import PhoneInput from "../components/common/PhoneInput";

// validation schema
import { validationSchema } from "../data/formOptions";

// form options import
import {
  ageDemographyOptions,
  maritalStatusOptions,
  employmentStatusOptions,
} from "../data/formOptions";

const Membership = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    city: "",
    stateProvince: "",
    birthday: "",
    ageDemography: "",
    gender: "",
    maritalStatus: "",
    employmentStatus: "",
    completedMembershipClass: "",
    profession: "",
    emergencyContactFirstName: "",
    emergencyContactLastName: "",
    emergencyContactEmail: "",
    emergencyContactPhone: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    // Handle form submission here
    setTimeout(() => {
      alert("Form submitted successfully!");
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <FormHeader title="MEMBERSHIP FORM" subtitle="FORMS" />

      <div className="max-w-3xl mx-auto -mt-24 pb-24 relative">
        <div className="bg-white rounded-2xl shadow- p-8 md:p-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Please provide your details
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-8 rounded-2xl px-6 py-8 h-screen overflow-scroll overflow-x-hidden">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextInput label="First Name" name="firstName" required />
                    <TextInput label="Last Name" name="lastName" required />
                  </div>

                  <TextInput label="Email" name="email" type="email" required />

                  <PhoneInput label="Phone" name="phone" required />

                  <TextInput label="Location" name="location" required />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextInput label="City" name="city" placeholder="" />
                    <TextInput
                      label="State / Province / Region"
                      name="stateProvince"
                      placeholder=""
                    />
                  </div>

                  <TextInput
                    label="Birthday"
                    name="birthday"
                    type="date"
                    placeholder="dd/mm/yyyy"
                    required
                  />

                  <SelectInput
                    label="Age Demography"
                    name="ageDemography"
                    options={ageDemographyOptions}
                    required
                  />

                  <RadioGroup
                    label="Gender"
                    name="gender"
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                    ]}
                    required
                  />

                  <SelectInput
                    label="Marital Status"
                    name="maritalStatus"
                    options={maritalStatusOptions}
                    required
                  />

                  <SelectInput
                    label="Employment Status"
                    name="employmentStatus"
                    options={employmentStatusOptions}
                    required
                  />

                  <RadioGroup
                    label="Have you completed Membership Class?"
                    name="completedMembershipClass"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                    required
                  />

                  <TextInput label="Profession" name="profession" />
                </div>

                {/* Emergency Contact Section */}
                <div className="space-y-6 pt-6 border-t border-neutral-200">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Emergency Contact
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextInput
                      label="First Name"
                      name="emergencyContactFirstName"
                      required
                    />
                    <TextInput
                      label="Last Name"
                      name="emergencyContactLastName"
                      required
                    />
                  </div>

                  <TextInput
                    label="Emergency Contact Email"
                    name="emergencyContactEmail"
                    type="email"
                    required
                  />

                  <PhoneInput
                    label="Emergency Contact Phone Number"
                    name="emergencyContactPhone"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Membership;
