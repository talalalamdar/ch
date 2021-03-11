type ChannelProps = {
  companyLogo: string
  label: string,
};

function Channel(props: ChannelProps) {
  return (
    <div className="channel">
      <div className="channel__content">
        <img className="channel__image" alt="company-logo" src={props.companyLogo}  />

        <div className="channel__label">
          <input type="checkbox" />

          { props.label }
        </div>
      </div>
    </div>
  )
}

export default Channel;
