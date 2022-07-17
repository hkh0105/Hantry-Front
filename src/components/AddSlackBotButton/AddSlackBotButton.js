import "./AddSlackBot.scss";

export default function AddSlackBotButton() {
  return (
    <button className="slack-button">
      <a
        className="slack-button-container"
        href="https://slack.com/oauth/v2/authorize?scope=channels%3Aread%2Cfiles%3Awrite%2Cchat%3Awrite%2Cchat%3Awrite.customize%2Cchat%3Awrite.public&amp;user_scope=chat%3Awrite%2Cfiles%3Awrite&amp;redirect_uri=https%3A%2F%2Fhantry.click%2Fslack%2Foauth&amp;client_id=2958854559602.3787713196229"
      >
        Add SlackBot
      </a>
    </button>
  );
}
