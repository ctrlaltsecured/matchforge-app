import React, { useMemo, useState } from "react";

type Role = "student" | "employer" | "admin" | null;

type StudentForm = {
  fullName: string;
  email: string;
  cohort: string;
  graduationDate: string;
  targetRole: string;
  locationPreference: string;
  workModel: string;
  salaryRange: string;
  skills: string;
  certifications: string;
  linkedin: string;
  github: string;
};

type EmployerForm = {
  companyName: string;
  recruiterName: string;
  recruiterEmail: string;
  openRole: string;
  openings: string;
  location: string;
  workModel: string;
  salaryBand: string;
  mustHaveSkills: string;
  preferredSkills: string;
};

const cardStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",
  background: "white",
  borderRadius: 28,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  overflow: "hidden",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid #dbe3f0",
  outline: "none",
  fontSize: 15,
  background: "#fff",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 8,
  fontSize: 14,
  fontWeight: 600,
  color: "#334155",
};

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 32, margin: 0, color: "#0f172a" }}>{title}</h2>
      {subtitle ? (
        <p
          style={{
            marginTop: 10,
            marginBottom: 0,
            color: "#64748b",
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function RoleButton({
  title,
  desc,
  active,
  onClick,
}: {
  title: string;
  desc: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left",
        borderRadius: 22,
        border: active ? "2px solid #2563eb" : "1px solid #dbe3f0",
        background: active ? "#eff6ff" : "white",
        padding: 22,
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 700, color: "#0f172a" }}>
        {title}
      </div>
      <div style={{ marginTop: 8, color: "#64748b", lineHeight: 1.5 }}>
        {desc}
      </div>
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        style={inputStyle}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  const [studentForm, setStudentForm] = useState<StudentForm>({
    fullName: "",
    email: "",
    cohort: "",
    graduationDate: "",
    targetRole: "",
    locationPreference: "",
    workModel: "",
    salaryRange: "",
    skills: "",
    certifications: "",
    linkedin: "",
    github: "",
  });

  const [employerForm, setEmployerForm] = useState<EmployerForm>({
    companyName: "",
    recruiterName: "",
    recruiterEmail: "",
    openRole: "",
    openings: "",
    location: "",
    workModel: "",
    salaryBand: "",
    mustHaveSkills: "",
    preferredSkills: "",
  });

  const studentCompletion = useMemo(() => {
    const values = Object.values(studentForm);
    const filled = values.filter((v) => v.trim().length > 0).length;
    return Math.round((filled / values.length) * 100);
  }, [studentForm]);

  const employerCompletion = useMemo(() => {
    const values = Object.values(employerForm);
    const filled = values.filter((v) => v.trim().length > 0).length;
    return Math.round((filled / values.length) * 100);
  }, [employerForm]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        padding: "32px 20px 60px",
      }}
    >
      <div style={cardStyle}>
        <div
          style={{
            padding: "34px 34px 26px",
            background:
              "linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #0f172a 100%)",
            color: "white",
          }}
        >
          <div style={{ fontSize: 54, fontWeight: 800, letterSpacing: -1.5 }}>
            MatchForge
          </div>
          <p
            style={{
              marginTop: 12,
              marginBottom: 0,
              fontSize: 22,
              color: "#dbeafe",
            }}
          >
            From cohort to career, before graduation.
          </p>
          <p
            style={{
              marginTop: 12,
              marginBottom: 0,
              color: "#bfdbfe",
              lineHeight: 1.6,
              maxWidth: 760,
            }}
          >
            Select your role to start building the MatchForge experience. This
            is the next layer of the MVP: role selection, onboarding, and
            profile creation for students and employers.
          </p>
        </div>

        <div style={{ padding: 34 }}>
          <SectionTitle
            title="Choose your role"
            subtitle="This is the first real decision point in the product. Each user enters a different flow based on what they need to do inside the platform."
          />

          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              marginBottom: 32,
            }}
          >
            <RoleButton
              title="Student"
              desc="Build your profile, define your goals, and enter the placement pool."
              active={selectedRole === "student"}
              onClick={() => setSelectedRole("student")}
            />
            <RoleButton
              title="Employer"
              desc="Define open roles, hiring needs, and review curated candidate matches."
              active={selectedRole === "employer"}
              onClick={() => setSelectedRole("employer")}
            />
            <RoleButton
              title="Admin"
              desc="Manage cohorts, readiness, deadlines, and final match operations."
              active={selectedRole === "admin"}
              onClick={() => setSelectedRole("admin")}
            />
          </div>

          {selectedRole === null ? (
            <div
              style={{
                border: "1px dashed #cbd5e1",
                borderRadius: 22,
                padding: 28,
                color: "#64748b",
                background: "#f8fafc",
              }}
            >
              Select a role above to unlock the next step of the app.
            </div>
          ) : null}

          {selectedRole === "student" ? (
            <div
              style={{
                display: "grid",
                gap: 28,
                gridTemplateColumns: "1.1fr 0.9fr",
              }}
            >
              <div>
                <SectionTitle
                  title="Student onboarding"
                  subtitle="This is where the student begins building a match-ready profile."
                />
                <div
                  style={{
                    display: "grid",
                    gap: 16,
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <Field
                    label="Full Name"
                    value={studentForm.fullName}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, fullName: v })
                    }
                    placeholder="Enter full name"
                  />
                  <Field
                    label="Email"
                    value={studentForm.email}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, email: v })
                    }
                    placeholder="Enter email"
                  />
                  <Field
                    label="Cohort"
                    value={studentForm.cohort}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, cohort: v })
                    }
                    placeholder="Spring 2026 Cybersecurity"
                  />
                  <Field
                    label="Graduation Date"
                    value={studentForm.graduationDate}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, graduationDate: v })
                    }
                    placeholder="MM/DD/YYYY"
                  />
                  <Field
                    label="Target Role"
                    value={studentForm.targetRole}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, targetRole: v })
                    }
                    placeholder="SOC Analyst"
                  />
                  <Field
                    label="Location Preference"
                    value={studentForm.locationPreference}
                    onChange={(v) =>
                      setStudentForm({
                        ...studentForm,
                        locationPreference: v,
                      })
                    }
                    placeholder="Kansas City / Remote"
                  />
                  <Field
                    label="Work Model"
                    value={studentForm.workModel}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, workModel: v })
                    }
                    placeholder="Remote / Hybrid / Onsite"
                  />
                  <Field
                    label="Salary Range"
                    value={studentForm.salaryRange}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, salaryRange: v })
                    }
                    placeholder="$70,000-$85,000"
                  />
                  <Field
                    label="Skills"
                    value={studentForm.skills}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, skills: v })
                    }
                    placeholder="SIEM, KQL, Incident Response"
                  />
                  <Field
                    label="Certifications"
                    value={studentForm.certifications}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, certifications: v })
                    }
                    placeholder="Security+, Google Cybersecurity"
                  />
                  <Field
                    label="LinkedIn"
                    value={studentForm.linkedin}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, linkedin: v })
                    }
                    placeholder="LinkedIn profile link"
                  />
                  <Field
                    label="GitHub / Portfolio"
                    value={studentForm.github}
                    onChange={(v) =>
                      setStudentForm({ ...studentForm, github: v })
                    }
                    placeholder="GitHub or portfolio link"
                  />
                </div>
              </div>

              <div>
                <SectionTitle
                  title="Student summary"
                  subtitle="As the form fills in, this panel becomes the candidate snapshot."
                />
                <div
                  style={{
                    border: "1px solid #dbe3f0",
                    borderRadius: 24,
                    padding: 22,
                    background: "#f8fafc",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <strong style={{ fontSize: 18 }}>Profile completion</strong>
                    <span style={{ color: "#2563eb", fontWeight: 700 }}>
                      {studentCompletion}%
                    </span>
                  </div>

                  <div
                    style={{
                      height: 10,
                      background: "#e2e8f0",
                      borderRadius: 999,
                      overflow: "hidden",
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        width: `${studentCompletion}%`,
                        height: "100%",
                        background: "#2563eb",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gap: 14 }}>
                    <div>
                      <strong>Name:</strong> {studentForm.fullName || "—"}
                    </div>
                    <div>
                      <strong>Role:</strong> {studentForm.targetRole || "—"}
                    </div>
                    <div>
                      <strong>Cohort:</strong> {studentForm.cohort || "—"}
                    </div>
                    <div>
                      <strong>Work Model:</strong> {studentForm.workModel || "—"}
                    </div>
                    <div>
                      <strong>Location:</strong>{" "}
                      {studentForm.locationPreference || "—"}
                    </div>
                    <div>
                      <strong>Skills:</strong> {studentForm.skills || "—"}
                    </div>
                    <div>
                      <strong>Certifications:</strong>{" "}
                      {studentForm.certifications || "—"}
                    </div>
                  </div>

                  <button
                    style={{
                      marginTop: 24,
                      width: "100%",
                      border: 0,
                      background: "#2563eb",
                      color: "white",
                      borderRadius: 16,
                      padding: "14px 16px",
                      fontSize: 16,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Continue to Match Preferences
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {selectedRole === "employer" ? (
            <div
              style={{
                display: "grid",
                gap: 28,
                gridTemplateColumns: "1.1fr 0.9fr",
              }}
            >
              <div>
                <SectionTitle
                  title="Employer onboarding"
                  subtitle="This is where hiring partners define roles, seats, and criteria."
                />
                <div
                  style={{
                    display: "grid",
                    gap: 16,
                    gridTemplateColumns: "1fr 1fr",
                  }}
                >
                  <Field
                    label="Company Name"
                    value={employerForm.companyName}
                    onChange={(v) =>
                      setEmployerForm({ ...employerForm, companyName: v })
                    }
                    placeholder="Enter company name"
                  />
                  <Field
                    label="Recruiter Name"
                    value={employerForm.recruiterName}
                    onChange={(v) =>
                      setEmployerForm({ ...employerForm, recruiterName: v })
                    }
                    placeholder="Enter recruiter name"
                  />
                  <Field
                    label="Recruiter Email"
                    value={employerForm.recruiterEmail}
                    onChange={(v) =>
                      setEmployerForm({ ...employerForm, recruiterEmail: v })
                    }
                    placeholder="Enter recruiter email"
                  />
                  <Field
                    label="Open Role"
                    value={employerForm.openRole}
                    onChange={(v) =>
                      setEmployerForm({ ...employerForm, openRole: v })
                    }
                    placeholder="Cybersecurity Analyst"
                  />
                  <Field
                    label="Number of Openings"
                    value={employerForm.openings}
                    onChange={(v) =>
                      setEmployerForm({ ...employerForm, openings: v })
                    }
                    placeholder="2"
                  />
                  <Field
                    label="Location"
                    value={employerForm.location}
                    onChange={(v) =>
                      setEmployerForm({ ...employerForm, location: v })
                    }
                    placeholder="Kansas City, MO"
                  />
                  <Field
                    label="Work Model"
                    value={employerForm.workModel}
                    onChange={(v) =>
                      setEmployerForm({ ...employerForm, workModel: v })
                    }
                    placeholder="Hybrid / Remote / Onsite"
                  />
                  <Field
                    label="Salary Band"
                    value={employerForm.salaryBand}
                    onChange={(v) =>
                      setEmployerForm({ ...employerForm, salaryBand: v })
                    }
                    placeholder="$75,000-$90,000"
                  />
                  <Field
                    label="Must-Have Skills"
                    value={employerForm.mustHaveSkills}
                    onChange={(v) =>
                      setEmployerForm({
                        ...employerForm,
                        mustHaveSkills: v,
                      })
                    }
                    placeholder="SIEM, triage, documentation"
                  />
                  <Field
                    label="Preferred Skills"
                    value={employerForm.preferredSkills}
                    onChange={(v) =>
                      setEmployerForm({
                        ...employerForm,
                        preferredSkills: v,
                      })
                    }
                    placeholder="Cloud, scripting, IAM"
                  />
                </div>
              </div>

              <div>
                <SectionTitle
                  title="Employer summary"
                  subtitle="This becomes the company role card students will review."
                />
                <div
                  style={{
                    border: "1px solid #dbe3f0",
                    borderRadius: 24,
                    padding: 22,
                    background: "#f8fafc",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <strong style={{ fontSize: 18 }}>Profile completion</strong>
                    <span style={{ color: "#2563eb", fontWeight: 700 }}>
                      {employerCompletion}%
                    </span>
                  </div>

                  <div
                    style={{
                      height: 10,
                      background: "#e2e8f0",
                      borderRadius: 999,
                      overflow: "hidden",
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        width: `${employerCompletion}%`,
                        height: "100%",
                        background: "#2563eb",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gap: 14 }}>
                    <div>
                      <strong>Company:</strong> {employerForm.companyName || "—"}
                    </div>
                    <div>
                      <strong>Role:</strong> {employerForm.openRole || "—"}
                    </div>
                    <div>
                      <strong>Openings:</strong> {employerForm.openings || "—"}
                    </div>
                    <div>
                      <strong>Location:</strong> {employerForm.location || "—"}
                    </div>
                    <div>
                      <strong>Work Model:</strong> {employerForm.workModel || "—"}
                    </div>
                    <div>
                      <strong>Salary Band:</strong>{" "}
                      {employerForm.salaryBand || "—"}
                    </div>
                    <div>
                      <strong>Must-Have Skills:</strong>{" "}
                      {employerForm.mustHaveSkills || "—"}
                    </div>
                  </div>

                  <button
                    style={{
                      marginTop: 24,
                      width: "100%",
                      border: 0,
                      background: "#2563eb",
                      color: "white",
                      borderRadius: 16,
                      padding: "14px 16px",
                      fontSize: 16,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Continue to Candidate Review
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {selectedRole === "admin" ? (
            <div
              style={{
                border: "1px solid #dbe3f0",
                borderRadius: 24,
                padding: 28,
                background: "#f8fafc",
              }}
            >
              <SectionTitle
                title="Admin control layer"
                subtitle="This is where program staff monitor readiness, employer participation, ranking deadlines, and final match operations."
              />

              <div
                style={{
                  display: "grid",
                  gap: 16,
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                }}
              >
                {[
                  "Approve students into the active pool",
                  "Approve employer participation",
                  "Review profile completion status",
                  "Lock rankings before Match Day",
                  "Run primary match round",
                  "Run secondary placement round",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "white",
                      border: "1px solid #dbe3f0",
                      borderRadius: 18,
                      padding: 18,
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
