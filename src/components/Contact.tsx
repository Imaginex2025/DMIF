import { useState } from "react";
import { Mail, Globe, Send, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

type FormDataKeys = "firstname" | "lastname" | "email" | "Contact" | "message";

interface FormDataType {
  firstname: string;
  lastname: string;
  email: string;
  Contact: string;
  message: string;
}

export function ContactDark({
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  email = "reach@drmadhan.in",
  web = { label: "www.drmadhan.in", url: "https://mywebsite.com" },
}) {
  const [formData, setFormData] = useState<FormDataType>({
    firstname: "",
    lastname: "",
    email: "",
    Contact: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<FormDataKeys | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as FormDataKeys]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    alert("Thanks for contacting us! We'll get back to you within 24 hours.");

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      Contact: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleFocus = (fieldName: FormDataKeys) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const contactItems = [

    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: Globe, label: "Website", value: web.label, href: web.url },
  ];

  const nameFields: { name: FormDataKeys; label: string; required: boolean }[] = [
    { name: "firstname", label: "First Name", required: true },
    { name: "lastname", label: "Last Name", required: false },
  ];

  return (
    <section id="Contact" className="min-h-screen lg:h-[100vh] py-20 relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-12">
            <div className="space-y-6">
              <div className="inline-block">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Contact{" "}
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Us
                  </span>
                </motion.h2>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">{description}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-6">Get in touch</h3>
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 space-y-6 shadow-2xl relative"
            >
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {nameFields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {field.label}
                      {field.required && <span className="text-red-400">*</span>}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={handleBlur}
                      placeholder={field.label}
                      required={field.required}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none ${
                        focusedField === field.name
                          ? "border-green-500 ring-2 ring-green-500/20 bg-slate-900/70"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Email & Contact */}
              <div className="flex justify-between gap-4 md:gap-0 flex-col md:flex-row items-center">
                <div className="space-y-2 w-full md:w-[48%]">
                  <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none ${
                      focusedField === "email"
                        ? "border-green-500 ring-2 ring-green-500/20 bg-slate-900/70"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  />
                </div>

                <div className="space-y-2 w-full md:w-[48%]">
                  <label className="block text-sm font-medium text-gray-300">Contact</label>
                  <input
                    type="text"
                    name="Contact"
                    value={formData.Contact}
                    onChange={handleChange}
                    onFocus={() => handleFocus("Contact")}
                    onBlur={handleBlur}
                    placeholder="+91 "
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none ${
                      focusedField === "Contact"
                        ? "border-green-500 ring-2 ring-green-500/20 bg-slate-900/70"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none resize-none ${
                    focusedField === "message"
                      ? "border-green-500 ring-2 ring-green-500/20 bg-slate-900/70"
                      : "border-white/10 hover:border-white/20"
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center pt-4 border-t border-white/10">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
