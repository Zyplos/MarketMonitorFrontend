/** @jsxImportSource theme-ui */
import { Container, Heading, Paragraph, Label, Input, Textarea, Button } from "theme-ui";
import MainLayout from "../internals/MainLayout";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function ContactUsPage() {
  const [state, handleSubmit] = useForm("mwkaqkaj");

  console.log(state);

  const formSuccess = state.succeeded;
  useEffect(() => {
    if (formSuccess) {
      toast.success("Email sent. Thank you for contacting us!");
    }
  }, [formSuccess]);

  return (
    <MainLayout>
      <Container>
        <Heading as="h1" sx={{ my: 4 }}>
          Contact Us
        </Heading>
        <Toaster />
        <Paragraph>Feel free to contact the MarketMonitor team with any questions, suggestions, or concerns. If you found a bug, please report it to us!</Paragraph>

        <form onSubmit={handleSubmit} sx={{ mb: 5 }}>
          {state.errors.map((error, index) => (
            <Paragraph variant="error" key={index}>
              Error: {error.message}
            </Paragraph>
          ))}
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" type="text" name="subject" />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          <Label htmlFor="comment">Comment</Label>
          <Textarea id="comment" name="comment" rows={8} mb={3} />
          <ValidationError prefix="Comment" field="comment" errors={state.errors} />
          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </form>
      </Container>
    </MainLayout>
  );
}

export default ContactUsPage;
