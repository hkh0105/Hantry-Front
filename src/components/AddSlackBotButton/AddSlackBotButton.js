import LongButton from "../../userInfterface/Button/Button";

export default function AddSlackBotButton() {
  return (
    <a
      className="slack-button-container"
      href="https://slack.com/oauth/v2/authorize?client_id=2958854559602.3787713196229&scope=channels:read,chat:write,chat:write.public,users.profile:read,chat:write.customize,files:write,incoming-webhook,commands,im:history&user_scope=chat:write,files:write"
    >
      <LongButton description="Add Slack" />
    </a>
  );
}
