import CombinationHeadingParaButtons1 from "../BrandPageComponents/CombinationHeadingParaButtons1";
export default function AgencyPage() {
  return (
    <div class="gradient-to-bottom" id="fifth-page">
      <div id="statistics">
        <div class="left-stats">
          <div class="stats-up">
            <div id="left-stats-left">
              <div class="left-stats-left-elements">
                <div class="stats-rect">
                  <span>Less Investment</span>
                </div>
                <div class="triangle-down"></div>
              </div>
            </div>

            <div id="left-stats-right">
              <div class="left-stats-right-elements">
                <div class="stats-rect">
                  <span>High Returns</span>
                </div>
                <div class="triangle-down"></div>
              </div>
            </div>
          </div>
          <div class="stats-down">
            <img id="stats-down-image" src="images/graph.png" alt="graph" />
          </div>
        </div>

        <CombinationHeadingParaButtons1
          heading="Agency"
          para="Echio believes in Promoting partnerships,
    which goes on to define us and
    our community approach. We believe in building mutually
    beneficial relationships with
    agencies, supporting each
    other and delivering the best
    output."
        />
      </div>
    </div>
  );
}
