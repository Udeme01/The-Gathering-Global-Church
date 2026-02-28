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
    homeAddress: "",
    city: "",
    stateProvince: "",
    birthday: "",
    ageDemography: "",
    gender: "",
    maritalStatus: "",
    employmentStatus: "",
    completedMembershipClass: "",
    occupation: "",
    bornAgain: "",
    speakInTongues: "",
    previousChurch: "",
    whichChurch: "",
    getInvolved: "",
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
      <FormHeader
        title="WELCOME TO THE GATHERING GLOBAL CHURCH"
        subtitle="MEMBERSHIP FORMS"
        xtraTitle="We're glad you're here. Please fill out this form so we can stay in touch and help you get involved."
      />

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
                <fieldset>
                  <legend className="p-6 font-medium text-lg">
                    Personal Information
                  </legend>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TextInput
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        required
                      />
                      <TextInput
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        required
                      />
                    </div>

                    <TextInput
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      required
                    />

                    <PhoneInput
                      label="Phone"
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                    />

                    <PhoneInput
                      label="WhatsApp Phone"
                      type="tel"
                      id="whatsappPhone"
                      name="whatsappPhone"
                    />

                    <TextInput
                      label="Home Address"
                      id="homeAddress"
                      type="text"
                      name="homeAddress"
                      required
                    />

                    <TextInput
                      label="Date of Birth"
                      id="birthday"
                      name="birthday"
                      type="date"
                      placeholder="dd/mm/yyyy"
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

                    <TextInput
                      label="Occupation"
                      name="occupation"
                      id="occupation"
                      type="text"
                    />
                  </div>
                </fieldset>

                {/* Emergency Contact Section */}
                <fieldset>
                  <legend className="text-lg font-medium text-neutral-900 p-6">
                    Spiritual Journey
                  </legend>

                  <div className="space-y-6">
                    <RadioGroup
                      label="Are you born again?"
                      name="bornAgain"
                      id="bornAgain"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                        { value: "not sure", label: "Not Sure" },
                      ]}
                      required
                    />
                    <RadioGroup
                      label="Do you speak in tongues?"
                      name="speakInTongues"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      required
                    />
                    <RadioGroup
                      label="Do you belong to a previous church?"
                      name="previousChurch"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      required
                    />
                    <TextInput
                      label="If yes, which one?"
                      name="whichChurch"
                      type="text"
                      id="whichChurch"
                    />
                  </div>
                </fieldset>

                {/* Getting Involved */}
                <fieldset>
                  <legend className="text-lg p-6 font-semibold text-neutral-900">
                    Getting Involved
                  </legend>

                  <RadioGroup
                    label="I would love to:"
                    name="getInvolved"
                    options={[
                      {
                        value: "join a squad",
                        label: "Join a Squad(small) group",
                      },
                      {
                        value: "attend a discipleship class",
                        label: "Attend a Discipleship Class",
                      },
                      {
                        value: "receive updates from church (SMS/WhatsApp)",
                        label: "Receive updates from Church (SMS/WhatsApp)",
                      },
                    ]}
                    required
                  />
                </fieldset>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 px-6 mt-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
