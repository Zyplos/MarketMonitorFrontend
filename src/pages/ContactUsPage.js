import {
  Container,
  Heading,
  Paragraph,
  Label,
  Input,
  Textarea,
  Button,
} from "theme-ui";
import MainLayout from "../internals/MainLayout";

function ContactUsPage() {
  return (
    <MainLayout>
      <Container>
        <Heading as="h1" sx={{ my: 4 }}>
          Contact Us
        </Heading>

        <Paragraph>
          Feel free to contact the MarketMonitor team with any questions,
          suggestions, or concerns. If you found a bug, please report it to us!
        </Paragraph>

        <form>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" />
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" />
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" name="subject" />

          <Label htmlFor="comment">Comment</Label>
          <Textarea name="comment" rows={8} mb={3} />
          <Button>Submit</Button>
        </form>
      </Container>
    </MainLayout>
  );
}

export default ContactUsPage;
