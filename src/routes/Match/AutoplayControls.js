import React from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const StyledSlider = styled(Slider)`
    padding-top: 5px;
    margin-top: 12px;
    grid-column: 2;
    min-width: 80px;
`

const PlayButton = styled.button`
    padding: 0;
    font-size: 2rem;
    border: 0;
    margin: 0 10px;
    width: 25px;
    grid-column: 1;
`

const ControlsWrapper = styled.div`
    display: grid;
`

const SliderContainer = styled.div`
    position: relative;
    grid-column: 2;
    margin-right: 10px;
`

const Tooltip = styled.div.attrs({
    style: ({ value, max }) => ({
        left: `${value / max * 100}%`,
    }),
})`
    position: absolute;
    top: -8px;
    font-size: 12px;
    margin-left: -35px;
    width: 70px;
    text-align: center;
`

class AutoplayControls extends React.PureComponent {
    render() {
        const { autoplay, toggleAutoplay, changeSpeed, autoplaySpeed } = this.props
        return (
            <ControlsWrapper>
                <PlayButton className="button" type="submit" onClick={toggleAutoplay}>
                    <i className={`fi-${autoplay ? 'pause' : 'play'}`} />
                </PlayButton>
                <SliderContainer>
                    <StyledSlider
                        min={1}
                        max={40}
                        value={autoplaySpeed}
                        onChange={changeSpeed}
                        tipFormatter={v => `${v}x`}
                        tipProps={{
                            visible: true,
                            placement: 'top',
                            align: { offset: [0, 8] },
                            overlayStyle: { zIndex: 1 },
                        }}
                    />
                    <Tooltip value={autoplaySpeed} max={40}>{autoplaySpeed}x</Tooltip>
                </SliderContainer>
            </ControlsWrapper>
        )
    }
}

export default AutoplayControls
