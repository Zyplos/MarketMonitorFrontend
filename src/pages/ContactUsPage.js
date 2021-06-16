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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolorum rem doloribus exercitationem quos eaque iste commodi a illo
          dignissimos?
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
